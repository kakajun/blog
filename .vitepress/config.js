const getPages = require("./utils/pages");
const isPro = process.env.NODE_ENV === "production";   // 开发换行时process.env 为undefined
async function getConfig() {
  let config = {
    head: [
      [
        "meta",
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
        },
      ],
      ["meta", { name: "keywords", content: "前端笔记" }],
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // 引入 Gitalk
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://lib.baomitu.com/gitalk/1.7.0/gitalk.min.css",
        },
      ],
      ["script", { src: "https://lib.baomitu.com/gitalk/1.7.0/gitalk.min.js" }],
      ["script", { src: "https://lib.baomitu.com/axios/0.21.1/axios.js" }],
    ],
    title: "前端笔记",
    themeConfig: {
      displayAllHeaders: true,
      logo: "/favicon.ico",
      pages: await getPages(),
      author: "前端笔记",
      search: true,
      nav: [
        { text: "🏠 首页", link: "/" },
        { text: "📅 归档", link: "/more/docs" },
        { text: "📂 分类", link: "/more/tags" },
        {
          text: "🔨 关于",
          items: [
            { text: "📜 README", link: "/README" },
            { text: "📝 建站日志", link: "/more/update-log" },
          ],
        },
      ],
    },
    dest: "public",
    base: isPro ? "/blog" : "",
  };
  return config;
}
module.exports = getConfig();