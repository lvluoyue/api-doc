<script setup>
import { useRoute, useData, useRouter, inBrowser } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import useSpendTime from '../hooks/useSpendTime'
import useThemeTransition from '../hooks/useThemeTransition'
import Giscus from "@giscus/vue";
import '../style.css'

const route = useRoute();
const { isDark } = useData();
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
    positionUsing: "width"
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
    <template #doc-after>
      <div style="margin-top: 24px">
        <Giscus
            id="comments"
            repo="lvluoyue/api-doc"
            repoId="R_kgDONdDcpg"
            category="Announcements"
            categoryid="DIC_kwDONdDcps4CnEHS"
            mapping="title"
            reactionsenabled="1"
            emitmetadata="0"
            inputposition="top"
            loading="lazy"
            lang="zh-CN"
            :theme="isDark ? 'dark' : 'light'"
            :key="route.path"
        ></Giscus>
      </div>
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
