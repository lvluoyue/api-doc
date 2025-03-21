<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useWebNotification } from '@vueuse/core'

let updateServiceWorker: (() => Promise<void>) | undefined

const {isSupported,show} = useWebNotification({
  requestPermissions: true
})

if (!isSupported) {
  console.error('Service Worker is not supported in this browser.')
}

function onOfflineReady() {
  show({
    title: '网页加载完毕，您可以在断网后仍然可以访问页面！',
    icon: './images/pwa-512x512.png',
    dir: 'auto',
    renotify: true,
  })
}

function onNeedRefresh() {
  show({
    title: '落月API有新的版本，正在为您自动更新！',
    icon: './images/pwa-512x512.png',
    dir: 'auto',
    renotify: true,
  })
}

const intervalMS = 5 * 60 * 1000;

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onOfflineReady,
    onNeedRefresh,
    onRegisteredSW(swUrl, r) {
      r &&
      setInterval(async () => {
        if (r.installing || !navigator) return;

        if ('connection' in navigator && !navigator.onLine) return;

        const resp = await fetch(swUrl, {
          cache: 'no-store',
          headers: {
            cache: 'no-store',
            'cache-control': 'no-cache',
          },
        });

        if (resp?.status === 200) await r.update();
      }, intervalMS);
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template>
</template>

<style>
</style>
