import {defineConfig, type UserConfig} from 'vitepress'
import {withSidebar, VitePressSidebarOptions} from 'vitepress-sidebar';
import {transformerTwoslash} from '@shikijs/vitepress-twoslash'
import {groupIconMdPlugin} from 'vitepress-plugin-group-icons'
import {withI18n} from 'vitepress-i18n';
import path from 'path'

const basePath = '/api-doc/'

// https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig = {
  lang: 'zh-CN',
  title: "落月API",
  description: "介绍",
  head: [
    [
      "link",
      {
        rel: "icon",
        sizes: "16x16",
        href: basePath + "/favicon-16x16.ico"
      }
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: basePath + "/favicon-16x16.ico"
      }
    ],
  ],
  markdown: {
    image: {
      lazyLoading: true
    },
    config(md) {
      md.use(groupIconMdPlugin, {
        titleBar: { includeSnippet: true },
      })
    },
    codeTransformers: [
      transformerTwoslash()
    ],
    languages: ['js', 'jsx', 'ts', 'tsx']
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    socialLinks: [
      {icon: 'github', link: 'https://github.com/lvluoyue/api-doc'},
      {icon: 'qq', link: 'https://github.com/lvluoyue/api-doc'},
    ],
    nav: [
      {text: '介绍', link: '/jieshao'},
      {
        text: '版本',
        items: [
          {text: 'v3', link: '/v3'},
          {text: 'v2', link: '/v2'},
          {text: 'v1', link: '/v1'},
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
  editLink: {
    pattern: 'https://github.com/lvluoyue/api-doc/edit/main/src/:path'
  },
  outDir: 'dist',
  srcDir: 'src',
  cacheDir: '.cache',
  base: basePath,
  vite: {
    configFile: __dirname + '/vite.config.mts'
  },
};

const vitePressSidebarConfig: VitePressSidebarOptions = [
  {
    documentRootPath: "/src",
    scanStartPath: 'v3',
    resolvePath: '/v3/',
    collapsed: false,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortMenusOrderNumericallyFromLink: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: []
  },
  {
    documentRootPath: "/src",
    scanStartPath: 'v2',
    resolvePath: '/v2/',
    collapsed: false,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortMenusOrderNumericallyFromLink: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['指南', '音乐模块', 'index.md']
  },
  {
    documentRootPath: "/src",
    scanStartPath: 'v1',
    resolvePath: '/v1/',
    collapsed: false,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortMenusOrderNumericallyFromLink: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: []
  }
];

const vitePressI18nConfig = {
  // VitePress I18n config
  locales: ['zhHans'], // first locale 'en' is root locale  //, 'en', 'ko'
  searchProvider: 'local' // enable search with auto translation
};

export default defineConfig(withSidebar(withI18n(vitePressConfig, vitePressI18nConfig), vitePressSidebarConfig))
