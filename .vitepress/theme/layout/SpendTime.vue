<script setup lang="ts">
import {useRoute} from "vitepress"
import {nextTick, onMounted, reactive, watch} from "vue"

const route = useRoute()

const data = reactive({
  count: 0,
  spendTime: 0
})

const initStat = () => {
  const content = document.querySelector(".vp-doc") as HTMLDivElement
  data.count = content.textContent.replace(/\s+/g, '').length
  data.spendTime = Math.round(data.count / 500)
}

onMounted(initStat)
watch(() => route.path,  () => nextTick(initStat))

</script>

<template>
  <span class="spend-time">
    ⏰本文共 {{data.count}} 字，阅读约 {{data.spendTime}} 分钟
  </span>
</template>

<style scoped>
.spend-time {
  margin-bottom: 1rem;
  color: var(--vp-c-text-3)
}
</style>
