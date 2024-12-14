---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "落月API"
  text: "为开发者提供高效、稳定、便捷的接口"
  image:
    src: /logo.png
    alt: 落月
  actions:
    - theme: brand
      text: 快速开始
      link: /markdown-examples
    - theme: alt
      text: 官方SDK
      link: /api-examples

features:
  - title: 问题 A
    details: 文本 A
  - title: 问题 B
    details: 文本 B
  - title: 问题 C
    details: 文本 C
---

<script setup>
  import { useData } from 'vitepress'

  const { theme } = useData()
</script>
