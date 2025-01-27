import signal
import sys
import traceback
from collections import deque
from datetime import datetime
from queue import Empty
from threading import Thread

from loguru import logger


def keyboardInterruptHandler(signum, frame):
    logger.info("\nKeyboard Interrupt\n")
    sys.exit(0)


signal.signal(signal.SIGINT, keyboardInterruptHandler)


class PypoLiqQueue(Thread):
    def __init__(self, q, pypo_liquidsoap):
        Thread.__init__(self)
        self.queue = q
        self.pypo_liquidsoap = pypo_liquidsoap

    def main(self):
        time_until_next_play = None
        schedule_deque = deque()
        media_schedule = None

        while True:
            try:
                if time_until_next_play is None:
                    logger.info("waiting indefinitely for schedule")
                    media_schedule = self.queue.get(block=True)
                else:
                    logger.info(
                        "waiting %ss until next scheduled item" % time_until_next_play
                    )
                    media_schedule = self.queue.get(
                        block=True, timeout=time_until_next_play
                    )
            except Empty as e:
                # Time to push a scheduled item.
                media_item = schedule_deque.popleft()
                self.pypo_liquidsoap.play(media_item)
                if len(schedule_deque):
                    time_until_next_play = self.date_interval_to_seconds(
                        schedule_deque[0]["start"] - datetime.utcnow()
                    )
                    if time_until_next_play < 0:
                        time_until_next_play = 0
                else:
                    time_until_next_play = None
            else:
                logger.info("New schedule received")

                # new schedule received. Replace old one with this.
                schedule_deque.clear()

                keys = sorted(media_schedule.keys())
                for i in keys:
                    schedule_deque.append(media_schedule[i])

                if len(keys):
                    time_until_next_play = self.date_interval_to_seconds(
                        media_schedule[keys[0]]["start"] - datetime.utcnow()
                    )

                else:
                    time_until_next_play = None

    def date_interval_to_seconds(self, interval):
        """
        Convert timedelta object into int representing the number of seconds. If
        number of seconds is less than 0, then return 0.
        """
        seconds = (
            interval.microseconds
            + (interval.seconds + interval.days * 24 * 3600) * 10**6
        ) / float(10**6)
        if seconds < 0:
            seconds = 0

        return seconds

    def run(self):
        try:
            self.main()
        except Exception as e:
            logger.error("PypoLiqQueue Exception: %s", traceback.format_exc())
