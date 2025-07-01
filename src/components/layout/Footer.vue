<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="@/assets/img/logo.svg" alt="Hit Invest Capital" />
          </div>
          <p class="footer-description">
            Soluções financeiras confiáveis para maximizar seus investimentos na bolsa de valores brasileira.
          </p>
        </div>

        <div class="footer-section">
          <h3>Links Rápidos</h3>
          <ul class="footer-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Serviços</h3>
          <ul class="footer-links">
            <li><a href="#consulting">Consultoria</a></li>
            <li><a href="#education">Educação Financeira</a></li>
            <li><a href="#analysis">Análise de Mercado</a></li>
            <li><a href="#management">Gestão de Ativos</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contato</h3>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span>hitinvestcapital@outlook.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>（11）98715-1324</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>São Paulo, Brasil</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2020. All rights reserved.</p>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 页脚组件逻辑
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: white;
  padding: 50px 0 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #fff;
  font-weight: 600;
}

/* Logo 区域 */
.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.footer-logo img {
  height: 28px;
  width: auto;
}

.footer-description {
  color: #ccc;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* 链接列表 */
.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #667eea;
}

/* 联系信息 */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ccc;
  font-size: 0.95rem;
}

.contact-icon {
  font-size: 1.1rem;
  min-width: 20px;
}

/* 底部版权区域 */
.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 20px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom p {
  color: #999;
  font-size: 0.9rem;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-link {
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #667eea;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .footer-logo img {
    height: 25px;
  }
}
</style>
