// https://vitepress.dev/guide/custom-theme
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {useData, useRoute} from 'vitepress';
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './layout/index.vue';
import 'virtual:group-icons.css'

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
  async enhanceApp({app, router, siteData}) {
    // @ts-ignore
    if (!import.meta.env.SSR) {
      const {loadOml2d} = await import('oh-my-live2d');
      loadOml2d({
        mobileDisplay: true,
        initialStatus: 'active',
        dockedPosition: 'right',
        models: [
          {
            name: '雷姆',
            path: 'https://gh-proxy.com/https://raw.githubusercontent.com/imuncle/live2d/refs/heads/master/model/rem/model.json',//https://model.hacxy.cn/rem/model.json
            volume: 1,
            // "scale": 0.15,
            // "position": [-100, -200],
            // "stageStyle": {
            //   // "height": 300
            //   width: 280
            // }
            scale: 0.13,
            position: [-50, 60],
            stageStyle: {
              height: 420,
              width: 200
            },
            mobileScale: 0.08,
            mobilePosition: [-15, 80],
            mobileStageStyle: {
              height: 300,
              width: 150
            },
          },
          {
            name: '初音未来',
            path: 'https://gh-proxy.com/https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/miku/miku.model.json',
            volume: 1,
            scale: 0.28,
            position: [0, 75],
            stageStyle: {
              height: 385,
              width: 220
            },
            mobileScale: 0.2,
            mobilePosition: [0, 95],
            mobileStageStyle: {
              height: 315,
              width: 160
            },
          },
          {
            name: 'ATRI',
            path: 'https://gh-proxy.com/https://raw.githubusercontent.com/Arisf0617/Live-2D/refs/heads/main/ATRI/ATRI.model3.json',
            volume: 1,
            scale: 0.18,
            position: [30, 100],
            stageStyle: {
              height: 400,
              width: 250
            },
            mobileScale: 0.12,
            mobilePosition: [20, 100],
            mobileStageStyle: {
              height: 300,
              width: 160
            },
          },
          // {
          //   name: '御坂美琴',
          //   path: 'https://gh-proxy.com/https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/mikoto/mikoto.model.json',
          //   volume: 1,
          //   scale: 0.26,
          //   position: [-50, 10],
          //   stageStyle: {
          //     height: 340,
          //     width: 220
          //   },
          //   mobileScale: 0.2,
          //   mobilePosition: [-40, 30],
          //   mobileStageStyle: {
          //     height: 290,
          //     width: 160
          //   },
          // },
          // {
          //   name: '白井黑子',
          //   path: 'https://gh-proxy.com/https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/kuroko/kuroko.model.json',
          //   volume: 1,
          //   scale: 0.26,
          //   position: [-50, 10],
          //   stageStyle: {
          //     height: 340,
          //     width: 220
          //   },
          //   mobileScale: 0.2,
          //   mobilePosition: [-40, 30],
          //   mobileStageStyle: {
          //     height: 290,
          //     width: 160
          //   },
          // },
          // {
          //   name: '佐天泪子',
          //   path: 'https://gh-proxy.com/https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/saten/saten.model.json',
          //   volume: 1,
          //   scale: 0.26,
          //   position: [-50, 10],
          //   stageStyle: {
          //     height: 340,
          //     width: 220
          //   },
          //   mobileScale: 0.2,
          //   mobilePosition: [-40, 30],
          //   mobileStageStyle: {
          //     height: 290,
          //     width: 160
          //   },
          // },
          // {
          //   name: '初春饰利',
          //   path: 'https://gh-proxy.com/https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/uiharu/uiharu.model.json',
          //   volume: 1,
          //   scale: 0.26,
          //   position: [-50, 10],
          //   stageStyle: {
          //     height: 340,
          //     width: 220
          //   },
          //   mobileScale: 0.2,
          //   mobilePosition: [-40, 30],
          //   mobileStageStyle: {
          //     height: 290,
          //     width: 160
          //   },
          // },
          {
            path: 'https://model.hacxy.cn/Pio/model.json',
            scale: 0.4,
            position: [0, 50],
            stageStyle: {
              height: 300
            },
            mobileScale: 0.3,
            mobilePosition: [0, 60],
            mobileStageStyle: {
              height: 255,
            },
          }
        ]
      });
    }
  }
} satisfies Theme
