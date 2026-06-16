<template>
  <div class="busuanzi-container">
    <span id="busuanzi_container_page_pv" style="display: none;">
      本文阅读量: <span id="busuanzi_value_page_pv"></span> 次
    </span>
    <span>&nbsp;·&nbsp;</span>
    <span id="busuanzi_container_site_pv" style="display: none;">
      全站总访问: <span id="busuanzi_value_site_pv"></span> 次
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 不蒜子脚本会在 enhanceApp 中加载，这里只负责展示容器
  const busuanzi = (window as any).busuanzi
  if (busuanzi && typeof busuanzi.fetch === 'function') {
    busuanzi.fetch()
  }
})
</script>

<style scoped>
.busuanzi-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-top: 1rem;
  padding: 0.5rem 0;
}
</style>
