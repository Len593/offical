import { nextTick } from 'vue'

// 简化的动画系统
export const useScrollAnimation = (options = {}) => {
  const config = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true,
    ...options
  }
  
  const initAnimation = () => {
    nextTick(() => {
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
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            if (config.once) {
              observer.unobserve(entry.target)
            }
          }
        })
      }, {
        threshold: config.threshold,
        rootMargin: config.rootMargin
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
  
  return {
    initAnimation
  }
}

// 兼容旧版本的函数
export const observeHooks = (css) => {
  const { initAnimation } = useScrollAnimation()
  initAnimation()
}
