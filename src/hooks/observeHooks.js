import { nextTick } from 'vue'

export const observeHooks = (css) => {
    nextTick(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
            }
          })
        }, {
          threshold: 0.1 // 当元素10%进入视口时触发
        })
      
        // 观察所有标题元素
        document.querySelectorAll(`.normal-title, .normal-tip, .normal-list, ${css}`).forEach(el => {
          observer.observe(el)
        })
      })
    }
