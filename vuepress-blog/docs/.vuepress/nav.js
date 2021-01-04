module.exports = [
  { text: "首页", link: "/", icon: "reco-home" },
  { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
  {
    text: "nodejs",
    items: [
      {
        text: "nodejs0",
        link: "/node/zero/",
      },
      {
        text: "nodejs1",
        link: "/node/first/",
      },
    ],
  },
  {
    text: "百宝箱",
    items: [
      {
        text: "在线编辑",
        items: [{ text: "图片压缩", link: "https://tinypng.com/" }],
      },
      {
        text: "在线服务",
        items: [
          { text: "阿里云", link: "https://www.aliyun.com/" },
          { text: "腾讯云", link: "https://cloud.tencent.com/" },
        ],
      },
      {
        text: "博客指南",
        items: [
          { text: "掘金", link: "https://juejin.im/" },
          { text: "CSDN", link: "https://blog.csdn.net/" },
        ],
      },
    ],
  },
];
