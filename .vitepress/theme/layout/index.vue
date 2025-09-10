<script setup>
import '../style.scss'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import DefaultTheme from 'vitepress/theme'
import useLive2D from "./hooks/useLive2D"
import useBprogress from "./hooks/useBprogress";
import useRegisterSW from "./hooks/useRegisterSW";
import useThemeTransition from './hooks/useThemeTransition'
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

useRegisterSW()
useThemeTransition()
useLive2D()
useBprogress()

</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
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
