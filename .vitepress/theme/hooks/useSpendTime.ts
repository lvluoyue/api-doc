import { onMounted, ref, watch, computed, nextTick } from 'vue'
import { useRoute } from 'vitepress'

/**
 * 阅读文章花费时间
 * @returns { text: string }
 */
const useSpendTime = () => {
  const route = useRoute()

  const count = ref(0)

  const initStat = () => {
    count.value = (document.querySelector("#VPContent") as HTMLDivElement)?.innerText?.length ?? 0
  }
  onMounted(initStat)
  watch(() => route.path, () => nextTick(initStat))

  const spendTime = computed(() => Math.round(count.value / 500))
  const text = computed(() => `本文共 ${count.value} 字，阅读约 ${spendTime.value} 分钟`)

  const textStyle = { display: 'flex', marginBottom: '1rem' }
  const colorStyle = { color: 'var(--vp-c-text-3)' }

  return {
    text,
    textStyle,
    colorStyle
  }
}

export default useSpendTime
