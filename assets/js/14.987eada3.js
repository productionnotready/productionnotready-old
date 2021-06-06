(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{407:function(e,t,o){"use strict";o.r(t);var a=o(10),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("Recently someone asked me whether my developers can use Apple M1 Macbooks for development. Macbooks have always been a favourite for developers, as they are at heart a Unix environment, and it is a no-brainer decision if you are in mobile application development. The popularity if Macbooks are such that I've even started to see open-source libraries being 'Mac first'.")]),e._v(" "),o("p",[e._v("The M1 Macbooks have been available since end-2020, so let's review the current state and what it means for web and mobile developers.")]),e._v(" "),o("blockquote",[o("p",[e._v("Disclaimer: This is not a How-To guide. I'm still using an Intel Macbook myself, so I don't have first-hand experience. This discussion is just based on the literature so far that I can find at this point in time. I may be incorrect and things may have changed by the time you are reading this article. I may update this article as I find more information.")])]),e._v(" "),o("h2",{attrs:{id:"native-vs-emulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#native-vs-emulation"}},[e._v("#")]),e._v(" Native vs Emulation")]),e._v(" "),o("p",[e._v("For native Mac apps, the current version of XCode now can cross-compile to both Intel and ARM architectures, and package them together using the new 'Universal 2' application format.")]),e._v(" "),o("p",[e._v("Universal 1 was actually for PowerPC and Intel, so this is not the first time that Apple had multiple architectures. However, this is probably the first time that Macs are the de-facto choice for most developers.")]),e._v(" "),o("p",[e._v("However, many of our web development tools are not native Mac apps, as many came from the Linux world with the objective to run on Linux servers. The current approach seems to centre around using Rosetta 2.")]),e._v(" "),o("h2",{attrs:{id:"development-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-tools"}},[e._v("#")]),e._v(" Development Tools")]),e._v(" "),o("h3",{attrs:{id:"google-chrome"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#google-chrome"}},[e._v("#")]),e._v(" Google Chrome")]),e._v(" "),o("p",[e._v("Chrome is available for M1, and performance is faster than running on Rosetta 2 emulation.")]),e._v(" "),o("h3",{attrs:{id:"electron-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#electron-apps"}},[e._v("#")]),e._v(" Electron Apps")]),e._v(" "),o("p",[e._v("Many popular desktop apps such as Slack, WhatsApp and VSCode are actually Electron web apps running in an embedded Chromium browser. Apple Silicon support was introduced since Electron 11.0 in Nov 2020, and they fixed a couple of issues in 12 and 13. Performance on ARM would depend on the version of Chromium.")]),e._v(" "),o("h3",{attrs:{id:"vscode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[e._v("#")]),e._v(" VSCode")]),e._v(" "),o("p",[e._v("VSCode has been available in stable for Apple Silicon since Feb 2021 with version 1.54.")]),e._v(" "),o("h3",{attrs:{id:"homebrew"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[e._v("#")]),e._v(" Homebrew")]),e._v(" "),o("p",[e._v("Homebrew 3.0.0 (released 5 Feb 2021) added official support for Apple Silicon, and you can install the ARM version under "),o("code",[e._v("/opt/homebrew")]),e._v(". However, not all formulae supports Apple Silicon yet, so for now the recommendation is to run Homebrew under Rosetta 2 using the "),o("code",[e._v("arch -x86_64")]),e._v(" flag.")]),e._v(" "),o("h3",{attrs:{id:"java"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[e._v("#")]),e._v(" Java")]),e._v(" "),o("p",[e._v("Oracle's JDK will run under Rosetta 2, but it appears they do not have native builds for Apple Silicon. To get native Apple Silicon support, currently you can install Azul's Zulu OpenJDK builds.")]),e._v(" "),o("h3",{attrs:{id:"node-js"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[e._v("#")]),e._v(" Node.js")]),e._v(" "),o("p",[e._v("Node.js introduced Apple Silicon support with Node.js 16 on April 2020.")]),e._v(" "),o("p",[e._v("I might be tempted to think that Node.js development would be fine, but I'm also aware that there are some node_modules that on "),o("code",[e._v("npm install")]),e._v(" will invoke gcc to build native dependencies, so there is still a risk that something breaks.")]),e._v(" "),o("h3",{attrs:{id:"mobile-development"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mobile-development"}},[e._v("#")]),e._v(" Mobile Development")]),e._v(" "),o("p",[o("strong",[e._v("XCode")]),e._v(" is not an issue, of course.")]),e._v(" "),o("p",[o("strong",[e._v("fastlane")]),e._v(" should work, although I've read some users had problems initially which seems to stem from the underlying Ruby version used.")]),e._v(" "),o("p",[o("strong",[e._v("Android Studio")]),e._v(" support for Apple Silicon is still preliminary (currently Android Studio Arctic Fox Canary 15). The Intel version works with Rosetta 2 however.")]),e._v(" "),o("p",[o("strong",[e._v("React Native")]),e._v(" should work as reported by some. But some Pods may not be ready for Apple Silicon, or may need to be updated. Also, some recommendations I've read include clearing the DerivedData folder and performing a clean build.")]),e._v(" "),o("p",[e._v("However, I've also read some people having problems with YogaKit (the layout engine in React Native), and the solution apparently is to run XCode with 'Open with Rosetta' set to true, which contradicts other reports.")]),e._v(" "),o("p",[o("strong",[e._v("Flutter")]),e._v(" support for Apple Silicon is still in development, but apparently works via Rosetta 2.")]),e._v(" "),o("h2",{attrs:{id:"virtualization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#virtualization"}},[e._v("#")]),e._v(" Virtualization")]),e._v(" "),o("p",[e._v("VirtualBox doesn't on Apple Silicon yet. Neither does VMware. This may be a major issue for some development teams whose workflows require running VMs locally.")]),e._v(" "),o("p",[e._v("There is apparently a Mac hypervisor called UTM based on QEMU that works. However, based on what I've read it runs only ARM images - the use case is to run ARM versions of Linux (and Windows) on your ARM Mac.")]),e._v(" "),o("h2",{attrs:{id:"docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),o("p",[e._v("There are two things about Docker to note here: there is the Docker tooling itself, and there is the building and running of Docker container images.")]),e._v(" "),o("p",[e._v("Docker Desktop for Mac is now available as a GA release, but you will still need to install Rosetta 2 as some binaries are still for Intel.")]),e._v(" "),o("p",[e._v("As for Docker images, the documentation says you can build and run images for both x86 and ARM architectures.")]),e._v(" "),o("p",[e._v("You can cross-compile to different architectures using the experimental "),o("code",[e._v("buildx")]),e._v(" feature. But I don't think this would be a typical use case for most development teams, as the building of container images would be handled by the CI/CD pipelines.")]),e._v(" "),o("p",[e._v("The main use case for most teams would be to run existing Intel-based images under emulation e.g. to run dependent middleware or services for local testing, or for development inside the container. This can be achieved by adding "),o("code",[e._v("--platform linux/amd64")]),e._v(" when running the container. However, Docker warns that running Intel-based containers under ARM is on 'best effort' basis only, and they may crash under emulation.")]),e._v(" "),o("p",[e._v("One known issue is "),o("code",[e._v("inotify")]),e._v(" does not work under QEMU emulation. "),o("code",[e._v("inotify")]),e._v(" is used for filesystem change notifications, and may be a deal-breaker for some applications. Another known issue is occasionally data drops.")]),e._v(" "),o("p",[e._v("Running Intel-based containers under ARM emulation also slower and use more memory. This could be another deal-breaker if you need to run your entire container stack locally for development and testing, or perhaps it already is, since there are no M1 Macbooks with more than 16 Gb RAM yet.")]),e._v(" "),o("p",[e._v("Docker recommends using ARM64 images whenever possible, and they expect more images to be built for ARM over time, so this issue will go away. However, I think they are the missing the point here about what developers need, although I can't really fault them for the current state of affairs.")]),e._v(" "),o("h3",{attrs:{id:"kubernetes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),o("p",[e._v("There are instructions for Apple Silicon in the Kubernetes documentation, so I think it works. However, the caveats should be the same as for Docker.")]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("It is indeed possible to use an Apple M1 Macbook for development, and many people have done it, but you will need to know how to navigate the native vs emulation issues, and adapt your workflows accordingly. But your mileage may vary depending on the languages and frameworks you use.")]),e._v(" "),o("p",[e._v("In my view, the greatest problem would be running VMs and containers. It is a fact that most of the enterprise server world are currently on x86_64 architectures, and although ARM servers are available they are not mainstream. Development teams who need to work with VMs and containers may need to adapt their workflows if they want to use Apple M1 Macbooks for development. Furthermore not every developer might understand the implications of different CPU architectures. Hence, I'm currently hesitant to recommend using Apple Silicon for professional development work.")])])}),[],!1,null,null,null);t.default=r.exports}}]);