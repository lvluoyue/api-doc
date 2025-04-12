// https://vitepress.dev/guide/custom-theme
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import {useData, useRoute, type Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './layout/index.vue'

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import { InjectionKey, type Options as InjectionKeyOptions } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebasePagePropertiesPlugin, type Options, type DynamicProperty } from '@nolebase/vitepress-plugin-page-properties/client'

import 'virtual:group-icons.css'
import '@shikijs/vitepress-twoslash/style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'

export default {
  extends: DefaultTheme,
  Layout, setup() {
    // Get frontmatter and route
    const {frontmatter} = useData();
    const route = useRoute();
    // giscus配置
    giscusTalk({
        repo: 'lvluoyue/api-doc', //仓库
        repoId: 'R_kgDONdDcpg', //仓库ID
        category: 'Announcements', // 讨论分类
        categoryId: 'DIC_kwDONdDcps4CnEHS', //讨论分类ID
        mapping: 'title',
        inputPosition: 'bottom',
        loading: 'lazy',
        lang: 'zh-CN',
      },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
    app.use(NolebaseGitChangelogPlugin)
    app.provide(InjectionKey, {
      // 配置... //
    } as InjectionKeyOptions)
    app.use(NolebasePagePropertiesPlugin(), {
      properties: {
        'zh-CN': [
          {
            key: 'wordCount',
            type: 'dynamic',
            title: '字数',
            options: {
              type: 'wordsCount',
            },
          },
          {
            key: 'readingTime',
            type: 'dynamic',
            title: '阅读时间',
            options: {
              type: 'readingTime',
              dateFnsLocaleName: 'zhCN',
            },
          }
        ],
      },
    } as Options<DynamicProperty>)

  },
} satisfies Theme
