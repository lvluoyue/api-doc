<script setup>
import { useRouter, inBrowser } from 'vitepress';
import RegisterSW from "./RegisterSW.vue";
import DefaultTheme from 'vitepress/theme'
import useSpendTime from '../hooks/useSpendTime'
import useThemeTransition from '../hooks/useThemeTransition'
import '../style.css'

const { text, textStyle, colorStyle } = useSpendTime()

useThemeTransition()

import { BProgress } from '@bprogress/core' // 进度条组件
import '@bprogress/core/css' // 进度条样式

const router = useRouter();

if (inBrowser) {
  BProgress.configure({
    easing: "ease-in-out",
    showSpinner: false,
    speed: 200,
    trickleSpeed: 200,
    positionUsing: "width",
  })
  router.onBeforeRouteChange = () => {
    BProgress.start() // 开始进度条
  }
  router.onAfterRouteChange = () => {
    BProgress.done() // 停止进度条
  }
}
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <span :style="textStyle">
        ⏰
        <span :style="colorStyle">{{ text }}</span>
      </span>
    </template>
    <template #layout-bottom>
      <RegisterSW />
    </template>
  </DefaultTheme.Layout>
</template>


<style>

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
