<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <img src="@/assets/img/logo.svg" alt="Hit Invest Capital" />
        </div>

        <!-- 桌面端导航 -->
        <nav class="nav-desktop">
          <ul class="nav-list">
            <li><div class="nav-link" :class="{active: activeSection==='/'}" @click="toPath('/')">Início</div></li>
            <li><div class="nav-link" :class="{active: activeSection==='/about'}" @click="toPath('/about')">Sobre</div></li>
            <li><div class="nav-link" :class="{active: activeSection==='/service'}" @click="toPath('/service')">Serviços</div></li>
          </ul>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <img src="./img/close.svg" alt="menu" class="close-icon" v-if="isMobileMenuOpen" />
          <img src="./img/more.svg" alt="menu" class="close-icon" v-else />
        </button>
      </div>

      <!-- 移动端导航 -->
      <nav class="nav-mobile" :class="{ 'nav-mobile-open': isMobileMenuOpen }">
        <ul class="nav-mobile-list">
          <li><div class="nav-mobile-link" :class="{active: activeSection==='/'}" @click="toPath('/')">Início</div></li>
          <li><div class="nav-mobile-link" :class="{active: activeSection==='/about'}" @click="toPath('/about')">Sobre</div></li>
          <li><div class="nav-mobile-link" :class="{active: activeSection==='/service'}" @click="toPath('/service')">Serviços</div></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = computed(() => {
  return router.currentRoute.value.path
})

const toPath = (path) => {
  window.scrollTo(0, 0)
  router.push(path)
  closeMobileMenu()
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // 防止背景滚动
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.99);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 35px;
  width: auto;
}

/* 桌面端导航 */
.nav-desktop {
  display: block;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: #667eea;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.close-icon {
  display: block;
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}

/* 移动端导航 */
.nav-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.nav-mobile-open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.nav-mobile-list {
  list-style: none;
  margin: 0;
  padding: 20px;
}

.nav-mobile-link {
  display: block;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease;
}

.nav-mobile-link:hover {
  color: #667eea;
}

.nav-mobile-link:last-child {
  border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .nav-mobile {
    display: block;
  }

  .header-content {
    height: 70px;
  }

  .logo img {
    height: 35px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .logo img {
    height: 30px;
  }
}

.nav-link.active,
.nav-mobile-link.active {
  color: #c49a6c;
}
.nav-link.active::after {
  width: 100%;
  background: #c49a6c;
}
</style>
