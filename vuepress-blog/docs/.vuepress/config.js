module.exports = {
  title: "rokudo盆锅裂办事处",
  description: "跳坑出坑，循环往复无穷尽也~",
  dest: "./dist",
  port: "7777",
  head: [
    ["link", { rel: "icon", href: "/img/logo.jpg" }],
    ["link", { rel: "stylesheet", href: "/css/style.css" }],
    ["script", { charset: "utf-8", src: "/js/main.js" }],
  ],
  markdown: {
    lineNumbers: true,
  }, //行数
  theme: "reco",
  themeConfig: {
    nav:require('./nav'),
    sidebar:require('./sidebar'),
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
    },
    // 备案
    record: "ICP 备案文案",
    recordLink: "ICP 备案指向链接",
    cyberSecurityRecord: "公安部备案文案",
    cyberSecurityLink: "公安部备案指向链接",
    // 项目开始时间，只填写年份
    startYear: "2017",
  },
};
