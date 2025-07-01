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

/* 动画样式现在由全局系统管理 */
</style>
