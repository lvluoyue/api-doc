import {defineConfig, type UserConfig} from 'vitepress'
import {withSidebar, VitePressSidebarOptions} from 'vitepress-sidebar';
import {transformerTwoslash} from '@shikijs/vitepress-twoslash'
import {groupIconMdPlugin} from 'vitepress-plugin-group-icons'
import {withI18n} from 'vitepress-i18n';
import { withPwa } from "@vite-pwa/vitepress";

const basePath = '/api-doc/'
const title = "落月API";
const description = "介绍";

// https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig = {
  lang: 'zh-CN',
  title: title,
  description: description,
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
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: {
      lazyLoading: true
    },
    lineNumbers: true,
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
    logo: "/images/pwa-512x512.png",
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
  pwa: {
    outDir: "dist", // 输出目录
    registerType: "autoUpdate", // 注册类型为自动更新
    includeManifestIcons: false, // 不包含清单图标
    manifest: {
      id: "/", // 清单 ID
      name: title, // 应用名称
      short_name: title, // 应用的短名称
      description: description, // 应用的描述
      theme_color: "#ffffff", // 主题颜色
      icons: [
        {
          src: "/images/pwa-120x120.png", // 图标路径
          sizes: "120x120", // 图标尺寸
          type: "image/png", // 图标类型
        },
        {
          src: "/images/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/images/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
      ],
    },
    // workbox: {
    //   globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"], // 匹配需要缓存的文件类型
    //   runtimeCaching: [
    //     {
    //       urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i, // 匹配需要缓存的 Google 字体
    //       handler: "CacheFirst", // 缓存优先策略
    //       options: {
    //         cacheName: "google-fonts-cache", // 缓存名称
    //         expiration: {
    //           maxEntries: 10, // 最大缓存条目数
    //           maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
    //         },
    //         cacheableResponse: {
    //           statuses: [0, 200], // 缓存的响应状态码
    //         },
    //       },
    //     },
    //     {
    //       urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i, // 匹配需要缓存的 Google 字体
    //       handler: "CacheFirst", // 缓存优先策略
    //       options: {
    //         cacheName: "gstatic-fonts-cache", // 缓存名称
    //         expiration: {
    //           maxEntries: 10, // 最大缓存条目数
    //           maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
    //         },
    //         cacheableResponse: {
    //           statuses: [0, 200], // 缓存的响应状态码
    //         },
    //       },
    //     },
    //     {
    //       urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i, // 匹配需要缓存的 jsdelivr 图片
    //       handler: "NetworkFirst", // 网络优先策略
    //       options: {
    //         cacheName: "jsdelivr-images-cache", // 缓存名称
    //         expiration: {
    //           maxEntries: 10, // 最大缓存条目数
    //           maxAgeSeconds: 60 * 60 * 24 * 7, // 缓存有效期，7天
    //         },
    //         cacheableResponse: {
    //           statuses: [0, 200], // 缓存的响应状态码
    //         },
    //       },
    //     },
    //   ],
    // },
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

export default defineConfig(withPwa(withSidebar(withI18n(vitePressConfig, vitePressI18nConfig), vitePressSidebarConfig)))
