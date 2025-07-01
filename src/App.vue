<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

</script>

<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>


<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 标题动画基础样式 */
.offers-list, .card-list, .hotels-list,
.normal-title,
.normal-tip {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 动画触发时的样式 */
.animate-in,
.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 为不同元素设置不同的延迟 */
.animate-in {
  transition-delay: 0.1s;
}

.animate-in {
  transition-delay: 0.3s;
}
</style>
