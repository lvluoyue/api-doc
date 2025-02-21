// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './layout/index.vue';
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout,
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
            path: 'https://model.hacxy.cn/rem/model.json',
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
            path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/miku/miku.model.json',
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
              width: 150
            },
          },
          {
            name: '御坂美琴',
            path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/mikoto/mikoto.model.json',
            volume: 1,
            scale: 0.26,
            position: [-50, 10],
            stageStyle: {
              height: 340,
              width: 220
            },
            mobileScale: 0.2,
            mobilePosition: [-40, 30],
            mobileStageStyle: {
              height: 290,
              width: 160
            },
          },
          {
            name: '白井黑子',
            path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/kuroko/kuroko.model.json',
            volume: 1,
            scale: 0.26,
            position: [-50, 10],
            stageStyle: {
              height: 340,
              width: 220
            },
            mobileScale: 0.2,
            mobilePosition: [-40, 30],
            mobileStageStyle: {
              height: 290,
              width: 160
            },
          },
          {
            name: '佐天泪子',
            path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/saten/saten.model.json',
            volume: 1,
            scale: 0.26,
            position: [-50, 10],
            stageStyle: {
              height: 340,
              width: 220
            },
            mobileScale: 0.2,
            mobilePosition: [-40, 30],
            mobileStageStyle: {
              height: 290,
              width: 160
            },
          },
          {
            name: '初春饰利',
            path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/uiharu/uiharu.model.json',
            volume: 1,
            scale: 0.26,
            position: [-50, 10],
            stageStyle: {
              height: 340,
              width: 220
            },
            mobileScale: 0.2,
            mobilePosition: [-40, 30],
            mobileStageStyle: {
              height: 290,
              width: 160
            },
          },
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
