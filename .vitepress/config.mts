import { defineConfig } from 'vitepress'
import cdn from 'vite-plugin-cdn-import'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar({
  lang: 'zh-CN',
  title: "落月API",
  description: "介绍",
  head: [
    [
      "link",
      {
        rel: "icon",
        sizes:  "16x16",
        href: "/favicon-16x16.ico"
      }
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon-16x16.ico"
      }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lvluoyue/api-doc' }
    ],
    nav: [
      { text: '介绍', link: '/jieshao' },
      {
        text: '版本',
        items: [
          { text: 'v2', link: '/v2/接口说明' },
          { text: 'v1', link: '/v1' },
        ]
      }
    ],
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            /* ... */
          },
          searchOptions: {
            /* ... */
          },
        },
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "清除搜索条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    footer: {
      // message: `<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备20016634号-2</a>`,
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 落月`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: [2, 3],
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "medium", // medium
        hourCycle: "h24"
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  outDir: 'dist',
  srcDir: 'src',
  base: '/api-doc/',
  vite: {
    // plugins: [
    //   cdn({
    //     modules: [
    //       {
    //         name: 'oh-my-live2d',
    //         var: 'oh-my-live2d',
    //         path: 'dist/index.min.js'
    //       },
    //     ]
    //   }),
    // ],

  //   plugins: [
  //     AutoNav({
  //       pattern: ["**/!(README|TODO).md"], // 也可以在这里排除不展示的文件，例如不匹配 README 和 TODO 文件
  //       settings: {
  //         v2: { hide: true,collapsed: true, useArticleTitle: false }, // 文件夹折叠配置
  //       },
  //       compareFn: (a, b) => {
  //         // 按最新提交时间(没有提交记录时为本地文件修改时间)升序排列
  //         return (b.options.lastCommitTime || b.options.modifyTime) - (a.options.lastCommitTime || a.options.modifyTime)
  //       },
  //       useArticleTitle: true // 全局开启使用文章一级标题作为文章名称
  //   }),
  // ],
    server: {
      open: true
    },
    // https://cn.vitejs.dev/config/shared-options.html#publicdir
    publicDir: "../public", // 指定 public 目录路径
  },
}, [{
  documentRootPath: "/src",
  scanStartPath: 'v2',
  resolvePath: '/v2/',
  collapsed: false,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
}, {
  documentRootPath: "/src",
  scanStartPath: 'v1',
  resolvePath: '/v1/',
  collapsed: false,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
}]))
