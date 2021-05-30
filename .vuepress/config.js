module.exports = {
  title: "Production Not Ready",
  description: "Welcome to my personal lab",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    pwa: true,
    activeHeaderLink: true,
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/",
      },
      {
        id: "tests",
        dirname: "_tests",
        path: "/tests/",
      },
    ],
    nav: [
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Tests",
        link: "/tests/",
      },
      {
        text: "About",
        link: "/about",
      },
    ],
    footer: {
      copyright: [
        {
          text:
            "Disclaimer: All views expressed here are my own and do not represent the opinions of my employer or any entities I may be affiliated with. Powered by VuePress | Copyright © GS Low",
        },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
  },
};
