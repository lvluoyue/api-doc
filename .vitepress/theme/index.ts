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
            path: 'https://model.oml2d.com/Pio/model.json',
            "scale": 0.4,
            "position": [0, 50],
            "stageStyle": {
              "height": 300
            }
          },
          {
            path: './live2d/model/sagiri/sagiri.model.json'
          }
        ]
      });
    }
  }
} satisfies Theme
