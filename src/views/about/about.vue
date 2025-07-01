<template>
  <div class="sobre-page">
    <!-- 顶部大区+公司介绍区 -->
    <section class="sobre-hero-intro">
      <div class="sobre-hero-content">
        <!-- 左侧文字区 -->
        <div class="hero-left scroll-fade-up">
          <h1 class="hero-title scroll-fade-up">
            Sobre a Hit Invest<br />Capital
          </h1>
          <div class="hero-desc scroll-fade-up">
            A HIT INVEST CAPITAL possui uma equipe, tanto de sócios quanto de colaboradores altamente qualificada e engajada. Somos compostos por profissionais com vasta experiência no mercado de capitais.<br />
            Nossos investimentos são realizados com uma perspectiva de longo prazo e acompanhados com rigorosa disciplina em todos os estágios. Buscamos excelência e transparência em todas as áreas envolvidas, com rígido controle de risco e liquidez dos ativos.
          </div>
          <button class="hero-btn scroll-fade-up">Investir</button>
        </div>
        <!-- 右侧图片+卡片区 -->
        <div class="hero-right scroll-fade-up">
          <div class="hero-img-wrap scroll-fade-up">
            <img src="@/assets/img/1.avif" alt="Equipe e análise financeira" class="about-img scroll-fade-up" />
            <div class="hero-quote-card scroll-fade-up">
              <div class="quote-icon scroll-fade-up">“</div>
              <div class="quote-text scroll-fade-up"><b>Excelência em investimentos financeiros.</b></div>
              <div class="quote-author scroll-fade-up">Hit Invest</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 客户评价区 -->
    <section class="sobre-testimonial scroll-fade-up">
      <div class="testimonial-inner">
        <div class="testimonial-stars">★★★★★</div>
        <div class="testimonial-text">
          A Hit Invest Capital me proporcionou segurança e confiança em meus investimentos, me ajudando a entender melhor o mercado financeiro. Recomendo a equipe experiente!
        </div>
        <div class="testimonial-user">
          <img class="testimonial-avatar" src="@/assets/img/1.avif" alt="Lucas Barone" />
          <div class="testimonial-author">Lucas Barone</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 添加滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // 观察所有需要动画的元素
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
</script>

<style scoped>
.sobre-page {
  background: #fff;
  color: #222;
  font-family: 'SF Pro', 'Helvetica Neue', Arial, sans-serif;
}
.sobre-hero-intro {
  padding: 120px 20px 40px ;
  background: #fff;
}
.sobre-hero-content {
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 120px;
  grid-template-columns: 1fr 1fr;
}
.hero-left {
}
.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 28px;
  color: #111;
}
.hero-desc {
  font-size: 1.13rem;
  color: #444;
  line-height: 1.7;
  margin-bottom: 36px;
}
.hero-btn {
  padding: 12px 38px;
  font-size: 1.08rem;
  color: #111;
  background: #fff;
  border: 2px solid #222;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  outline: none;
}
.hero-btn:hover {
  background: #f7f7f7;
  border-color: #c49a6c;
  color: #c49a6c;
}
.hero-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.hero-img-wrap {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}
.about-img {
  width: 100%;
  border-radius: 28px;
  object-fit: cover;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
}
.hero-quote-card {
  position: absolute;
  left: 20px;
  bottom: 40px;
  transform: translateY(50%);
  width: 90%;
  background: #ededed;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  padding: 22px 28px 18px 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.quote-icon {
  font-size: 2.1rem;
  color: #222;
  font-family: serif;
  line-height: 1;
  margin-bottom: 2px;
}
.quote-text {
  font-size: 1.13rem;
  color: #222;
  font-weight: 700;
  margin-bottom: 4px;
}
.quote-author {
  font-size: 1rem;
  color: #666;
  font-weight: 400;
}
.sobre-banner {
  background: linear-gradient(90deg, #fff8e1 0%, #ffe7b2 100%);
  padding: 36px 0;
  text-align: center;
  margin: 40px 0 0 0;
}
.sobre-banner-text {
  font-size: 1.5rem;
  color: #c49a6c;
  font-weight: 700;
  letter-spacing: 1px;
}
.sobre-testimonial {
  background: #595959;
  padding: 80px 0 60px 0;
  text-align: center;
}
.testimonial-inner {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testimonial-stars {
  color: #fff;
  font-size: 1.7rem;
  margin-bottom: 18px;
  letter-spacing: 2px;
}
.testimonial-text {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 36px;
  text-align: center;
}
.testimonial-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}
.testimonial-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: none;
  margin-bottom: 0;
}
.testimonial-author {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
}
.sobre-contact {
  padding: 40px 0 20px 0;
  text-align: center;
}
.sobre-contact h3 {
  color: #c49a6c;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 18px;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 1.08rem;
}
.contact-info .icon {
  color: #c49a6c;
  margin-right: 8px;
}
.sobre-footer {
  text-align: center;
  color: #bbb;
  font-size: 0.98rem;
  padding: 24px 0 18px 0;
  background: #fff;
  border-top: 1px solid #f0e6d2;
  margin-top: 30px;
}
@media (max-width: 900px) {
  .sobre-hero-content {
    flex-direction: column;
    gap: 36px;
    align-items: stretch;
  }
  .hero-right {
    align-items: center;
  }
  .hero-img-wrap {
    max-width: 100%;
  }
}
@media (max-width: 600px) {
  .testimonial-text {
    font-size: 1.1rem;
    margin-bottom: 32px;
  }
  .testimonial-stars {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }
}
.scroll-fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.animate-in {
  opacity: 1 !important;
  transform: none !important;
}
</style> 