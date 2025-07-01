import { onMounted } from 'vue'

/**
 * 简化的滚动动画函数 - 用于快速设置
 */
export function useSimpleScrollAnimation() {
  onMounted(() => {
    // 确保样式存在
    if (!document.getElementById('scroll-animations-styles')) {
      const style = document.createElement('style')
      style.id = 'scroll-animations-styles'
      style.textContent = `
        .scroll-fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .scroll-fade-up.animate-in {
          opacity: 1 !important;
          transform: none !important;
        }
      `
      document.head.appendChild(style)
    }
    
    // 创建观察器
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    // 观察所有动画元素
    const animateElements = document.querySelectorAll('.scroll-fade-up')
    animateElements.forEach(el => observer.observe(el))
    
    // 如果一开始就在视口内，直接加动画
    setTimeout(() => {
      animateElements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.classList.add('animate-in')
        }
      })
    }, 300)
  })
}

/**
 * 滚动动画组合式函数
 * @param {Object} options - 动画配置选项
 * @param {number} options.threshold - 触发阈值 (0-1)
 * @param {string} options.rootMargin - 根边距
 * @param {boolean} options.once - 是否只触发一次
 * @param {number} options.delay - 延迟时间(秒)
 * @param {number} options.stagger - 错开动画时间(秒)
 * @returns {Object} 返回动画相关方法
 */
export function useScrollAnimations(options = {}) {
  const config = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true,
    delay: 0,
    stagger: 0.1,
    ...options
  }
  
  onMounted(() => {
    // 确保样式存在
    if (!document.getElementById('scroll-animations-styles')) {
      const style = document.createElement('style')
      style.id = 'scroll-animations-styles'
      style.textContent = `
        .scroll-fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .scroll-fade-up.animate-in {
          opacity: 1 !important;
          transform: none !important;
        }
      `
      document.head.appendChild(style)
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = config.delay + (index * config.stagger)
          setTimeout(() => {
            entry.target.classList.add('animate-in')
            if (config.once) {
              observer.unobserve(entry.target)
            }
          }, delay * 1000)
        }
      })
    }, {
      threshold: config.threshold,
      rootMargin: config.rootMargin
    })
    
    const animateElements = document.querySelectorAll('.scroll-fade-up')
    animateElements.forEach(el => observer.observe(el))
    
    setTimeout(() => {
      animateElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          const delay = config.delay + (index * config.stagger)
          setTimeout(() => {
            el.classList.add('animate-in')
          }, delay * 1000)
        }
      })
    }, 300)
  })
  
  return {
    // 可以返回一些辅助方法
    reinitAnimation: () => {
      // 重新初始化动画的逻辑
    }
  }
} 