#/bin/bash
echo "::group::Install Python apps"
pip3 install nose mock

pip3 install -e python_apps/airtime_analyzer/.
pip3 install -e python_apps/airtime-celery/.
pip3 install -e python_apps/api_clients/.
pip3 install -e python_apps/pypo/.
echo "::endgroup::"
