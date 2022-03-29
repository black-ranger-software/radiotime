"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1674],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return c}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(i),c=n,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return i?a.createElement(h,r(r({ref:t},p),{},{components:i})):a.createElement(h,r({ref:t},p))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<o;u++)r[u]=i[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4874:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=i(7462),n=i(3366),o=(i(7294),i(3905)),r=i(3580),s=["components"],l={title:"LibreTime 3.0.0 alpha 5"},u=void 0,p={unversionedId:"releases/3.0.0-alpha.05",id:"releases/3.0.0-alpha.05",title:"LibreTime 3.0.0 alpha 5",description:"Features",source:"@site/../docs/releases/3.0.0-alpha.05.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.05",permalink:"/docs/releases/3.0.0-alpha.05",editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.05.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 5"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 6",permalink:"/docs/releases/3.0.0-alpha.06"},next:{title:"LibreTime 3.0.0 alpha 4",permalink:"/docs/releases/3.0.0-alpha.04"}},m={},d=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"Deprecation of Ubuntu 14.04 (Trusty)",id:"deprecation-of-ubuntu-1404-trusty",level:3},{value:"\u2b06\ufe0f Upgrading",id:"\ufe0f-upgrading",level:2},{value:"S3 storage support removal",id:"s3-storage-support-removal",level:3},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Media-Monitor config needs manual removing",id:"media-monitor-config-needs-manual-removing",level:3},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Silan from OBS build (https://github.com/LibreTime/libretime/issues/177#issuecomment-299195796)",id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796",level:4},{value:"Local armhf builds for Raspberry Pi 3 (https://github.com/LibreTime/libretime/issues/214#issuecomment-305988355)",id:"local-armhf-builds-for-raspberry-pi-3-httpsgithubcomlibretimelibretimeissues214issuecomment-305988355",level:4},{value:"Legacy upstream silan packages (https://github.com/LibreTime/libretime/issues/197)",id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197",level:4},{value:"Remove silan completely (https://github.com/LibreTime/libretime/issues/193#issuecomment-299174997)",id:"remove-silan-completely-httpsgithubcomlibretimelibretimeissues193issuecomment-299174997",level:4},{value:"Liquidsoap Support",id:"liquidsoap-support",level:3},{value:"Liquidsoap 1.3.0 Patchset (#192)",id:"liquidsoap-130-patchset-192",level:4},{value:"Install old liquidsoap from opam (#192)",id:"install-old-liquidsoap-from-opam-192",level:4},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3},{value:"Lack of i18n toolchain is disturbing",id:"lack-of-i18n-toolchain-is-disturbing",level:3},{value:"\ud83d\udcdd Colophon",id:"-colophon",level:2}],c={toc:d};function h(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.ZP,{date:"2018-10-12",version:"3.0.0-alpha.5",mdxType:"ReleaseHead"}),(0,o.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Interface improvements"),(0,o.kt)("li",{parentName:"ul"},"Raspbian 9 support in installer script"),(0,o.kt)("li",{parentName:"ul"},"Allow skipping RabbitMQ and PostgreSQL install in installer script with ",(0,o.kt)("inlineCode",{parentName:"li"},"--no-rabbitmq ")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--no-postgres"))),(0,o.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove ",(0,o.kt)("inlineCode",{parentName:"li"},"[media-monitor]")," section from default install"),(0,o.kt)("li",{parentName:"ul"},"Fix last help links that pointed to sourcefabric and update others to point to discourse"),(0,o.kt)("li",{parentName:"ul"},"Fix for ShoutCAST DNAS rejecting title updates when artist is missing"),(0,o.kt)("li",{parentName:"ul"},"Initial fixes for native IPv6 support"),(0,o.kt)("li",{parentName:"ul"},"Support modern pika versions"),(0,o.kt)("li",{parentName:"ul"},"Disable podcast subscription limit"),(0,o.kt)("li",{parentName:"ul"},"Return proper ",(0,o.kt)("inlineCode",{parentName:"li"},"Content-Length")," for legacy database entries missing the info")),(0,o.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removed Amazon S3 storage support")),(0,o.kt)("h3",{id:"deprecation-of-ubuntu-1404-trusty"},"Deprecation of Ubuntu 14.04 (Trusty)"),(0,o.kt)("p",null,"This info is an early warning that we are deprecating a major os version."),(0,o.kt)("p",null,"Ubuntu 16.04 (Xenial) and Ubuntu 18.04 (Bionic) are now available and Trusty is EOL in April 2019."),(0,o.kt)("h2",{id:"\ufe0f-upgrading"},"\u2b06\ufe0f Upgrading"),(0,o.kt)("h3",{id:"s3-storage-support-removal"},"S3 storage support removal"),(0,o.kt)("p",null,"The configuration file structure has changed. Remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"amazon_s3")," configuration section from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file, as S3 storage support has been removed."),(0,o.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,o.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LibreTime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,o.kt)("h3",{id:"media-monitor-config-needs-manual-removing"},"Media-Monitor config needs manual removing"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," script you should most likely remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"[media-monitor]")," config section from your ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file to ensure you do not run into the problems described in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LibreTime/libretime/issues/450"},"https://github.com/LibreTime/libretime/issues/450"),". We recommend you do this before running the update since there are no known LibreTime releases that depend on the config value."),(0,o.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,o.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan on most Debian based Platforms (ie. Ubuntu). This affects all distros supported by the installer except Debian unstable which has the silan 0.3.3 and CentOS which does not have upstream packages and you may either install from source or use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,o.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,o.kt)("p",null,"You can check the version of silan by running with ",(0,o.kt)("inlineCode",{parentName:"p"},"silan --version")," which should report ",(0,o.kt)("inlineCode",{parentName:"p"},"0.3.3")," or with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo dpkg -s silan | awk '/Version/ {print $2}'")," that will show the exact package version you installed. Please include this information if you file bugs concerning silan."),(0,o.kt)("p",null,"There are multiple workarounds to this issue and ",(0,o.kt)("a",{parentName:"p",href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=855319"},"a bug against the upstream")," has been fixed. Kyle Robbertze @paddatrapper has taken over maintainership of the silan packages in Debian as he is currently packaging LibreTime for Debian. The silan package is in testing as can be seen in the ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.debian.org/pkg/silan"},"Debian PTS"),". This section will get updated once the package is in stable."),(0,o.kt)("p",null,"Until this is sorted you should pre-install silan from a source you trust. If your distro has not updated to 0.3.3 yet you can also help by asking your distros maintainers for a bump."),(0,o.kt)("p",null,"The following solutions have been reported to work. If they do not work, please note that it is your responsibility to get working silan packages."),(0,o.kt)("h4",{id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796"},"Silan from OBS build (",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/LibreTime/libretime/issues/177#issuecomment-299195796"},"https://github.com/LibreTime/libretime/issues/177#issuecomment-299195796"),")"),(0,o.kt)("p",null,"Works for all relevant Debian and Ubuntu distros and installs silan ",(0,o.kt)("inlineCode",{parentName:"p"},"0.3.3~nmu1"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# install package signing key from obs\nwget -qO- http://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_7.0/Release.key \\\n  | apt-key add -\n\n# add OBS repo to sources list (pick the distro you need)\n\n# Debian Stretch\necho 'deb http://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_9.0_standard/ ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Debian Jessie\necho 'deb http://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_8.0 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Xenial\necho 'deb http://download.opensuse.org/repositories/home:/hairmare:/silan/xUbuntu_16.04 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Trusty (14.04) EOL in April 2019\necho 'deb http://download.opensuse.org/repositories/home:/hairmare:/silan/Ubuntu_14.10_standard/ ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n\n# update local package database\napt-get update\n\n# install silan 0.3.3 from obs packages\napt-get install silan\n")),(0,o.kt)("h4",{id:"local-armhf-builds-for-raspberry-pi-3-httpsgithubcomlibretimelibretimeissues214issuecomment-305988355"},"Local armhf builds for Raspberry Pi 3 (",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/LibreTime/libretime/issues/214#issuecomment-305988355"},"https://github.com/LibreTime/libretime/issues/214#issuecomment-305988355"),")"),(0,o.kt)("p",null,"Since build.opensuse.org can't build Debian packages on arm due to missing dependencies, the ",(0,o.kt)("inlineCode",{parentName:"p"},"0.3.3~nmu1")," arm package was built in a docker crossdev environment. This is reported to work on Debian Jessie on a Raspberry Pi 3 Model B."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -O https://github.com/LibreTime/libretime/files/1049738/silan_0.3.3.nmu1_armhf.deb.tar.gz\ntar xvf silan_0.3.3.nmu1_armhf.deb.tar.gz\nsudo dpkg -i silan_0.3.3~nmu1_armhf.deb\n")),(0,o.kt)("h4",{id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197"},"Legacy upstream silan packages (",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/LibreTime/libretime/issues/197"},"https://github.com/LibreTime/libretime/issues/197"),")"),(0,o.kt)("p",null,"Legacy upstream hosts patched packages for Ubuntu Trusty on ",(0,o.kt)("inlineCode",{parentName:"p"},"apt.sourcefabric.org"),". They install as ",(0,o.kt)("inlineCode",{parentName:"p"},"0.3.2~trusty~sfo-1"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tee -a /etc/apt/sources.list <<EOD\ndeb http://apt.sourcefabric.org/ trusty main\nEOD\n\nsudo apt-get update\nsudo apt-get install sourcefabric-keyring\nsudo apt-get update\nsudo apt-get install --reinstall silan=0.3.2~trusty~sfo-1\n")),(0,o.kt)("h4",{id:"remove-silan-completely-httpsgithubcomlibretimelibretimeissues193issuecomment-299174997"},"Remove silan completely (",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/LibreTime/libretime/issues/193#issuecomment-299174997"},"https://github.com/LibreTime/libretime/issues/193#issuecomment-299174997"),")"),(0,o.kt)("p",null,"It is worth mentioning that you can disable cue point detection by removing silan from the system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get uninstall silan\n")),(0,o.kt)("p",null,"Reportedly this might have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LibreTime/libretime/issues/214#issuecomment-305748757"},"side effects"),"."),(0,o.kt)("h3",{id:"liquidsoap-support"},"Liquidsoap Support"),(0,o.kt)("p",null,"Libretime currently only supports liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," out of the box. If you install a current version of liquidsoap ",(0,o.kt)("a",{parentName:"p",href:"http://liquidsoap.fm/download.html"},"using OPAM")," or through the ",(0,o.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:liquidsoap"},"Rabe Liquidsoap Distribution for CentOS (RaBe LSD)")," you will most likely have liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.2")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.3")," installed."),(0,o.kt)("p",null,"#352 reports that liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," can exhibit issues on some Debian based installs. One fix for the issue is to install liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.0")," and to use the following patching steps. Kyle from silan fame is taking the needed steps to get liquidsoap maintained again in Debian so we expect the situation to improve over time."),(0,o.kt)("p",null,"You can check your liquidsoap version by running ",(0,o.kt)("inlineCode",{parentName:"p"},"liquidsoap --version"),"."),(0,o.kt)("p",null,"If you already have liquidsoap >= 1.3.0 you have a couple of options."),(0,o.kt)("h4",{id:"liquidsoap-130-patchset-192"},"Liquidsoap 1.3.0 Patchset (#192)"),(0,o.kt)("p",null,"You can patch your installation of LibreTime to support liquidsoap 1.3.0."),(0,o.kt)("p",null,"An up to date patch is available through GitHub and can be applied to an unpacked tarball as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime-3.0.0-alpha.5/\ncurl -L https://github.com/LibreTime/libretime/compare/master...radiorabe:feature/liquidsoap-1.3.0.patch | patch -p1\n")),(0,o.kt)("p",null,"Git users can pull from the branch at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LibreTime/libretime/compare/master...radiorabe:feature/liquidsoap-1.3.0"},"https://github.com/LibreTime/libretime/compare/master...radiorabe:feature/liquidsoap-1.3.0")," directly."),(0,o.kt)("h4",{id:"install-old-liquidsoap-from-opam-192"},"Install old liquidsoap from opam (#192)"),(0,o.kt)("p",null,"You can downgrade an OPAM install of liquidsoap by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'opam install "liquidsoap<1.3.0"\n')),(0,o.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,o.kt)("p",null,"Currently LibreTime does not support watching folders as ",(0,o.kt)("a",{parentName:"p",href:"http://libretime.org/manual/media-folders/#watching-a-folder"},"described in the manual"),". Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature."),(0,o.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,o.kt)("p",null,"Line In recording can be enabled in the UI but doesn't currently work. This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording."),(0,o.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,o.kt)("p",null,"Some minimal OS installs do not have a default locale configured. This only seems to affect some VPS installs as they often do not have a locale setup in the default images provided."),(0,o.kt)("p",null,"You can set up the locale using a combination of the following command. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,o.kt)("p",null,"These instructions do not seem to work on all Debian based distros so you might need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')),(0,o.kt)("h3",{id:"lack-of-i18n-toolchain-is-disturbing"},"Lack of i18n toolchain is disturbing"),(0,o.kt)("p",null,"Some translations might miss the tarball. They didn't get lost but the build chain needs fixing. Work is in #301 and additional work is needed as it has become clear that we proabably want to support bidirectional translation syncing with zanata."),(0,o.kt)("h2",{id:"-colophon"},"\ud83d\udcdd Colophon"),(0,o.kt)("p",null,"Sorry for the ",(0,o.kt)("em",{parentName:"p"},"late")," release, RelEng has been busy with adulting and generally having a life as of lately. I'm still very much committed to LibreTime but can only find a limited amount of time to look into Issues due to being busy qualifying LibreTime for production workloads at my station. I plan on re-shifting my focus on pull request reviews and RelEng to address my lack of time going further."))}h.isMDXComponent=!0},3580:function(e,t,i){i.d(t,{ZP:function(){return m}});var a=i(7462),n=i(3366),o=i(7294),r=i(3905),s=i(9960),l=function(e){var t=e.version,i=e.children;return o.createElement(s.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},i)},u=["components"],p={toc:[]};function m(e){var t=e.components,i=(0,n.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This version was released the ",(0,r.kt)("strong",null,i.date),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please report new issues and/or feature requests in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LibreTime/libretime/issues"},"the issue tracker"),"."),(0,r.kt)("p",{parentName:"div"},"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,r.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion."))),(0,r.kt)("p",null,"The full tarball for the ",(0,r.kt)("code",null,i.version)," release of LibreTime is available ",(0,r.kt)(l,{version:i.version,mdxType:"TarballLink"},"here"),"."))}m.isMDXComponent=!0}}]);