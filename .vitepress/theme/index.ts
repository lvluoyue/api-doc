// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
    // @ts-ignore
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        mobileDisplay: true,
        initialStatus: 'active',
        dockedPosition: 'right',
        models: [
          {
            path: 'https://model.oml2d.com/rem/model.json',
            // "scale": 0.15,
            // "position": [-100, -200],
            // "stageStyle": {
            //   // "height": 300
            //   width: 280
            // }
            "scale": 0.15,
            "position": [-50, 50],
            "stageStyle": {
              // "height": 300
              width: 280
            }
          },
          {
            path: 'https://model.oml2d.com/Pio/model.json',
            "scale": 0.4,
            "position": [0, 50],
            "stageStyle": {
              "height": 300
            }
          },
          {
            path: 'https://model.oml2d.com/umaru/model.json',
            "scale": 0.25,
            // "position": [0, 70],
            "stageStyle": {
              "height": 300
            }
          }
        ]
      });
    }
  }
} satisfies Theme
