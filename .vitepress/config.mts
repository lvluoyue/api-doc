import {defineConfig, type UserConfig} from 'vitepress'
import {withSidebar, VitePressSidebarOptions} from 'vitepress-sidebar';
import {transformerTwoslash} from '@shikijs/vitepress-twoslash'
import {groupIconMdPlugin} from 'vitepress-plugin-group-icons'
import {withI18n} from 'vitepress-i18n';
import {withPwa} from "@vite-pwa/vitepress";
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
import {loadEnv, ConfigEnv} from "vite";

const basePath = '/api-doc/'
const title = "落月API";
const description = "介绍";


// https://vitepress.dev/reference/site-config
const vitePressConfig = (env): UserConfig => {
  return {
    lang: 'zh-CN',
    title: title,
    description: description,
    contentProps: {
      a: 'b'
    },
    head: [
      [
        "link",
        {
          rel: "icon",
          sizes: "16x16",
          href: basePath + "favicon-16x16.ico"
        }
      ],
      [
        "link",
        {
          rel: "shortcut icon",
          href: basePath + "favicon-16x16.ico"
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
          titleBar: {includeSnippet: true},
        })
          .use(markdownItTaskCheckbox)
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
      configFile: './vite.config.mts'
    },
    pwa: {
      devOptions: {
        enabled: true,
        suppressWarnings: true,
        type: 'module',
        navigateFallback: '/',
        resolveTempFolder: () => 'dev-dist'
      },
      mode: env.VITE_APP_MODE || 'development',
      base: basePath,
      outDir: "../dist", // 输出目录
      registerType: "autoUpdate", // 注册类型为自动更新
      includeManifestIcons: false, // 不包含清单图标
      display: "fullscreen",
      manifest: {
        id: "1", // 清单 ID
        name: title, // 应用名称
        short_name: title, // 应用的短名称
        description: description, // 应用的描述
        theme_color: "#ffffff", // 主题颜色
        lang: "zh-CN",
        version: "1.0.1",
        icons: [
          {
            src: "./images/pwa-192x192.png", // 图标路径
            sizes: "192x192", // 图标尺寸
            type: "image/png", // 图标类型
            purpose: "any",
          },
          {
            src: "./images/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2,moc,json}"], // 匹配需要缓存的文件类型
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/model\.hacxy\.cn\/.*/i, // 匹配需要缓存的 Google 字体
            handler: "CacheFirst", // 缓存优先策略
            options: {
              cacheName: "live2d-model-hacxy", // 缓存名称
              expiration: {
                maxEntries: 50, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
          {
            urlPattern: /^https:\/\/giscus\.app\/.*/i, // 匹配需要缓存的 Google 字体
            handler: "CacheFirst", // 缓存优先策略
            options: {
              cacheName: "giscus", // 缓存名称
              expiration: {
                maxEntries: 50, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 7, // 缓存有效期，7天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
          {
            urlPattern: /^https:\/\/gh-proxy\.com\/.*/i, // 匹配需要缓存的 gh-proxy 图片
            handler: "NetworkFirst", // 网络优先策略
            options: {
              cacheName: "gh-proxy", // 缓存名称
              expiration: {
                maxEntries: 50, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
        ],
      },
    },
  };
}

const vitePressSidebarConfig: VitePressSidebarOptions = () => {
  return [
    {
      documentRootPath: "/src",
      scanStartPath: 'v3',
      resolvePath: '/v3/',
      collapsed: false,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      sortMenusOrderNumericallyFromLink: true,
      includeRootIndexFile: true,
      manualSortFileNameByPriority: ['指南', '音乐模块', '搜索接口', 'index.md']
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
      manualSortFileNameByPriority: ['指南', '音乐模块', 'index.md'],
      removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
      prefixSeparator: '.', //删除前缀的符号
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
}

const vitePressI18nConfig = () => {
  return {
    // VitePress I18n config
    locales: ['zhHans'], // first locale 'en' is root locale  //, 'en', 'ko'
    searchProvider: 'local' // enable search with auto translation
  };
}

export default defineConfig(({mode}: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return withPwa(withSidebar(withI18n(vitePressConfig(env), vitePressI18nConfig(env)), vitePressSidebarConfig(env)))
})
