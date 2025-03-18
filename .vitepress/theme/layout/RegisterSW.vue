<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useWebNotification } from '@vueuse/core'
const {isSupported,notification,show,close,onClick,onShow,onError,onClose} = useWebNotification({
  title: 'Hello, VueUse world!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
})

let updateServiceWorker: (() => Promise<void>) | undefined

function onOfflineReady() {
  show()
}
function onNeedRefresh() {
  show()
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
