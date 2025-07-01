<template>
    <!-- 联系我们 -->
    <section class="contact scroll-fade-up">
      <div class="container">
        <div class="contact-row scroll-fade-up">
          <div class="contact-left scroll-fade-up">
            <h2 class="scroll-fade-up">Investimentos</h2>
            <p class="scroll-fade-up">Sua confiança é nossa prioridade em finanças.</p>
          </div>
          <div class="contact-divider scroll-fade-up"></div>
          <div class="contact-right scroll-fade-up">
            <div class="contact-label scroll-fade-up">CONTATO</div>
            <div class="contact-info-row scroll-fade-up">
              <span class="icon scroll-fade-up">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="4" fill="none"/><path d="M3.5 6.5L10 11.5L16.5 6.5" stroke="#c49a6c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="3.5" y="6.5" width="13" height="7" rx="2" stroke="#c49a6c" stroke-width="1.5"/></svg>
              </span>
              <span class="scroll-fade-up">hitinvestcapital@outlook.com</span>
            </div>
            <div class="contact-info-row scroll-fade-up">
              <span class="icon scroll-fade-up">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="4" fill="none"/><path d="M6.5 4.5C6.5 3.94772 6.94772 3.5 7.5 3.5H12.5C13.0523 3.5 13.5 3.94772 13.5 4.5V5.5C13.5 6.05228 13.0523 6.5 12.5 6.5H7.5C6.94772 6.5 6.5 6.05228 6.5 5.5V4.5Z" stroke="#c49a6c" stroke-width="1.5"/><path d="M10 13.5V15.5" stroke="#c49a6c" stroke-width="1.5" stroke-linecap="round"/><path d="M7.5 6.5V15.5C7.5 16.0523 7.94772 16.5 8.5 16.5H11.5C12.0523 16.5 12.5 16.0523 12.5 15.5V6.5" stroke="#c49a6c" stroke-width="1.5"/></svg>
              </span>
              <span class="scroll-fade-up">(11) 98715-1324</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  <footer class="footer-minimal scroll-fade-up">
    <div class="footer-divider scroll-fade-up"></div>
    <div class="footer-copyright scroll-fade-up">© 2020. All rights reserved.</div>
  </footer>
</template>

<script setup>
import { useSimpleScrollAnimation } from '@/composables/useScrollAnimation'

// 使用简化的滚动动画
useSimpleScrollAnimation()
</script>

<style>
/* 动画样式现在由全局系统管理 */

.footer-minimal {
  width: 100vw;
  background: #181818;
  color: #fff;
  position: relative;
  left: 0;
  bottom: 0;
  z-index: 100;
  padding: 0;
  min-height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.footer-divider {
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.08);
  margin-bottom: 0;
}
.footer-copyright {
  font-size: 0.93rem;
  color: rgba(255,255,255,0.55);
  margin: 16px 0 10px 0;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: 'SF Pro', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
}

/* 联系我们 极简美化 */
.contact {
  padding: 120px 20px 80px 20px;
  background: #181818;
  color: #fff;
}
.contact-row {
  display: flex;
  justify-content: center;
  align-items: stretch;
  max-width: 900px;
  margin: 0 auto;
  gap: 0;
  position: relative;
}
.contact-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 40px;
}
.contact-left h2 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 18px;
  color: #fff;
  letter-spacing: 1px;
  line-height: 1.1;
}
.contact-left p {
  font-size: 1.15rem;
  color: #bdbdbd;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 6px;
}
.contact-divider {
  width: 1px;
  background: rgba(255,255,255,0.10);
  margin: 0 40px;
  min-height: 120px;
  align-self: center;
}
.contact-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  padding-left: 40px;
}
.contact-label {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.contact-info-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.18rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 0;
  letter-spacing: 1px;
}
.contact-info-row .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
}
@media (max-width: 900px) {
  .contact-row {
    flex-direction: column;
    gap: 32px;
    align-items: stretch;
    max-width: 98vw;
  }
  .contact-left, .contact-right {
    align-items: flex-start;
    padding: 0;
  }
  .contact-left h2 {
    font-size: 2rem;
  }
  .contact-left p, .contact-info-row {
    font-size: 1rem;
  }
  .contact-label {
    font-size: 0.98rem;
  }
  .contact-divider {
    display: none;
  }
  .contact-right {
    gap: 18px;
    padding: 0;
  }
}
</style>
