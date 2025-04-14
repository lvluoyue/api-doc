import {onMounted} from "vue"
import type { InternalModel, Live2DModel } from 'pixi-live2d-display'
import type {Oml2dEvents, Oml2dMethods, Oml2dProperties} from "oh-my-live2d/dist/types/oml2d";

type Oml2d = Oml2dProperties & Oml2dMethods & Oml2dEvents & {
  models: {
    model: Live2DModel<InternalModel>
  }
}

/**
 * oh-my-live2d
 */
export default () => {
  onMounted(async () => {
      // @ts-ignore
      if (!import.meta.env.SSR) {
        // @ts-ignore
        const {loadOml2d} = import.meta.env.DEV ? await import('oh-my-live2d') : window.OML2D
        const live2d = loadOml2d({
          mobileDisplay: true,
          initialStatus: 'active',
          dockedPosition: 'right',
          menus: {
            disable: false,
            items: [
              {
                id: 'Rest',
                icon: 'icon-rest',
                title: '休息',
                onClick(oml2d): void {
                  oml2d.statusBarOpen(oml2d.options.statusBar?.restMessage); // 展示状态条
                  oml2d.clearTips(); // 清除当前提示框内容, 并停止空闲消息播放器

                  // 为状态条绑定点击事件
                  oml2d.setStatusBarClickEvent(() => {
                    void oml2d.statusBarClose(); // 关闭状态条
                    void oml2d.stageSlideIn(); // 舞台滑入
                    oml2d.statusBarClearEvents(); // 清除所有事件
                  });

                  void oml2d.stageSlideOut(); // 舞台滑出
                }
              },
              {
                id: 'SwitchModelClothes',
                icon: 'icon-skin',
                title: '切换衣服',
                onClick(oml2d): void {
                  void oml2d.loadNextModelClothes();
                }
              },
              {
                id: 'face',
                icon: 'icon-Expression-2',
                title: '更换表情',
                onClick: async(oml2d: Oml2d): Promise<void> => {
                  const result = await oml2d.models.model.internalModel.motionManager.expressionManager?.setRandomExpression()

                  if (result) {
                    oml2d.tipsMessage('表情切换~', 5000, 3);
                  } else {
                    oml2d.tipsMessage('没有可用表情~', 5000, 3);
                  }
                }
              },
              {
                id: 'SwitchModel',
                icon: 'icon-switch',
                title: '切换模型',
                onClick(oml2d): void {
                  void oml2d.loadNextModel();
                }
              }
            ],
          },
          models: [
            {
              name: '雷姆',
              //https://model.hacxy.cn/rem/model.json
              path: 'https://gh-proxy.com/https://raw.githubusercontent.com/imuncle/live2d/refs/heads/master/model/rem/model.json',
              volume: 1,
              // "scale": 0.15,
              // "position": [-100, -200],
              // "stageStyle": {
              //   // "height": 300
              //   width: 280
              // }
              scale: 0.13,
              position: [-30, 80],
              stageStyle: {
                height: 440,
                width: 240
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
              scale: 0.30,
              position: [0, 75],
              stageStyle: {
                height: 440,
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
              path: [
                'https://gh-proxy.com/https://raw.githubusercontent.com/lvluoyue/Live2D-ATRI/refs/heads/main/atri_8.model3.json',
                // 'https://gh-proxy.com/https://raw.githubusercontent.com/Arisf0617/Live-2D/refs/heads/main/ATRI/ATRI.model3.json'
              ],
              volume: 1,
              scale: 0.23,
              position: [-90, 100],
              stageStyle: {
                height: 570,
                width: 280
              },
              // scale: 0.18,
              // position: [30, 100],
              // stageStyle: {
              //   height: 400,
              //   width: 250
              // },
              mobileScale: 0.11,
              mobilePosition: [-20, 100],
              mobileStageStyle: {
                height: 330,
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
              mobileScale: 0.25,
              mobilePosition: [0, 60],
              mobileStageStyle: {
                height: 225,
              },
            }
          ]
        })
      }
    }
  )
}
