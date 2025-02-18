<script setup lang="ts">
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';

const route = useRoute();
const { isDark } = useData();
</script>

<template>
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

<style scoped>

</style>