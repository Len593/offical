<template>
    <div class="service-page">
        <!-- 标题区 -->
        <section class="service-hero scroll-fade-up">
            <h1 class="service-title scroll-fade-up">Nossos Serviços</h1>
            <p class="service-subtitle scroll-fade-up">Investimentos seguros e rentáveis para o seu futuro financeiro.</p>
        </section>

        <!-- 两栏服务卡片区 -->
        <section class="service-cards scroll-fade-up">
            <div class="service-card scroll-fade-up">
                <div class="service-card-title scroll-fade-up">Gestão de Ativos</div>
                <div class="service-card-desc scroll-fade-up">
                    Nossa equipe especializada gerencia seu portfólio com estratégias eficazes e análise de mercado
                    detalhada.
                </div>
            </div>
            <div class="service-card scroll-fade-up">
                <div class="service-card-title scroll-fade-up">Consultoria Financeira</div>
                <div class="service-card-desc scroll-fade-up">
                    Oferecemos orientação personalizada para maximizar seus investimentos na bolsa de valores
                    brasileira.
                </div>
            </div>
        </section>
        <section class="service-hero service-hero2 scroll-fade-up">
            <h1 class="service-title">Investimentos Seguros</h1>
            <p class="service-subtitle">Oferecemos soluções financeiras para maximizar seus investimentos na bolsa.</p>
        </section>
        <!-- 服务内容区 -->
        <section class="service-feature-list ">
            <div class="service-feature scroll-fade-up" >
                <div class="feature-img scroll-fade-up">
                    <img src="@/assets/img/service1.avif" alt="Equipe Especializada" />
                </div>
                <div class="feature-text scroll-fade-up">
                    <div class="feature-title">Equipe Especializada</div>
                    <div class="feature-desc">
                        Contamos com uma equipe de 200 profissionais dedicados ao sucesso financeiro dos nossos
                        clientes, garantindo um atendimento personalizado e estratégias eficazes para o mercado
                        brasileiro.
                    </div>
                </div>
            </div>
            <div class="service-feature scroll-fade-up">
                <div class="feature-img scroll-fade-up">
                    <img src="@/assets/img/service2.avif" alt="Resultados Concretos" />
                </div>
                <div class="feature-text">
                    <div class="feature-title">Resultados Concretos</div>
                    <div class="feature-desc">
                        Nosso compromisso é entregar resultados consistentes e confiáveis, utilizando análises de
                        mercado e expertise para orientar nossos clientes em suas decisões de investimento na bolsa de
                        valores.
                    </div>
                </div>
            </div>
        </section>

        <!-- 客户评价 -->
        <section class="service-testimonial scroll-fade-up">
            <div class="testimonial-inner">
                <div class="testimonial-stars scroll-fade-up">★★★★★</div>
                <div class="testimonial-text scroll-fade-up">
                    A Hit Invest Capital transformou minha visão sobre investimentos. Profissionais competentes e
                    confiáveis, sempre prontos para ajudar. Recomendo a todos que buscam segurança financeira.
                </div>
                <div class="testimonial-user">
                    <img class="testimonial-avatar scroll-fade-up" src="@/assets/img/1.avif" alt="Celso Rocha" />
                    <div class="testimonial-author scroll-fade-up">Celso Rocha</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useSimpleScrollAnimation } from '@/composables/useScrollAnimation'

// 使用简化的滚动动画
useSimpleScrollAnimation()
</script>

<style scoped>
/* 动画样式现在由全局系统管理 */

.service-page {
    background: #fff;
    color: #222;
    font-family: 'SF Pro', 'Helvetica Neue', Arial, sans-serif;
}

.service-hero {
    padding: 160px 20px 40px 20px;
    text-align: left;
    background: #fff;
    max-width: 1200px;
    margin: 0 auto;
}
.service-hero2{
    padding: 120px 20px 40px 20px;
}
.service-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #222;
    margin-bottom: 18px;
    letter-spacing: 0.5px;
    line-height: 1.1;
}

.service-subtitle {
    font-size: 1.15rem;
    color: #666;
    font-weight: 400;
    margin-bottom: 40px;
}

.service-cards {
    display: flex;
    gap: 24px;
    max-width: 1200px;
    margin: 20px auto 0 auto;
    padding: 0 24px;
}

.service-card {
    background: #dbdbdb;
    flex: 1 1 0;
    border-radius: 0;
    padding: 40px 36px 36px 36px;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.service-card-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 18px;
}

.service-card-desc {
    font-size: 1.15rem;
    color: #666;
    font-weight: 400;
    line-height: 1.6;
}

.service-feature-list {
    display: flex;
    flex-direction: column;
    gap: 80px;
    max-width: 1200px;
    margin: 20px auto 60px auto;
    padding: 0 24px;
}

.service-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
}

.feature-img {
    width: 100%;
}

.feature-img img {
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
    display: block;
}

.feature-text {
    max-width: 480px;
}

.feature-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 18px;
}

.feature-desc {
    font-size: 1.08rem;
    color: #666;
    font-weight: 400;
    line-height: 1.7;
}

.service-testimonial {
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

@media (max-width: 900px) {
    .service-hero {
        padding: 140px 20px 30px 20px;
    }
    .service-hero2 {
        padding: 100px 20px 30px 20px;
    }
    .service-title {
        font-size: 2.2rem;
        margin-bottom: 16px;
    }
    .service-subtitle {
        font-size: 1.05rem;
        margin-bottom: 30px;
    }
    
    .service-cards {
        flex-direction: column;
        gap: 18px;
        padding: 0 15px;
    }

    .service-card {
        padding: 28px 20px 24px 20px;
        min-width: auto;
    }
    
    .service-card-title {
        font-size: 1.4rem;
        margin-bottom: 16px;
    }
    
    .service-card-desc {
        font-size: 1.05rem;
    }

    .service-feature {
        grid-template-columns: 1fr;
        gap: 40px;
        align-items: flex-start;
    }

    .service-feature-list {
        gap: 60px;
        padding: 0 15px;
        margin: 20px auto 40px auto;
    }

    .feature-img,
    .feature-text {
        max-width: 100%;
        width: 100%;
    }
    
    .feature-title {
        font-size: 1.3rem;
        margin-bottom: 16px;
    }
    
    .feature-desc {
        font-size: 1rem;
    }

    .testimonial-text {
        font-size: 1.1rem;
        margin-bottom: 32px;
    }

    .testimonial-stars {
        font-size: 1.3rem;
        margin-bottom: 18px;
    }
}

@media (max-width: 768px) {
    .service-hero {
        padding: 120px 15px 25px 15px;
    }
    .service-hero2 {
        padding: 80px 15px 25px 15px;
    }
    .service-title {
        font-size: 2rem;
        margin-bottom: 14px;
    }
    .service-subtitle {
        font-size: 1rem;
        margin-bottom: 25px;
    }
    
    .service-cards {
        padding: 0 10px;
    }
    
    .service-card {
        padding: 24px 16px 20px 16px;
    }
    
    .service-card-title {
        font-size: 1.3rem;
        margin-bottom: 14px;
    }
    
    .service-card-desc {
        font-size: 1rem;
    }
    
    .service-feature-list {
        gap: 50px;
        padding: 0 10px;
    }
    
    .service-feature {
        gap: 30px;
    }
    
    .feature-title {
        font-size: 1.2rem;
        margin-bottom: 14px;
    }
    
    .feature-desc {
        font-size: 0.95rem;
    }
    
    .service-testimonial {
        padding: 60px 15px 40px 15px;
    }
    
    .testimonial-text {
        font-size: 1rem;
        margin-bottom: 28px;
    }
    
    .testimonial-stars {
        font-size: 1.2rem;
        margin-bottom: 16px;
    }
}

@media (max-width: 480px) {
    .service-hero {
        padding: 100px 15px 20px 15px;
    }
    .service-hero2 {
        padding: 60px 15px 20px 15px;
    }
    .service-title {
        font-size: 1.8rem;
        margin-bottom: 12px;
    }
    .service-subtitle {
        font-size: 0.95rem;
        margin-bottom: 20px;
    }
    
    .service-cards {
        padding: 0 15px;
    }
    
    .service-card {
        padding: 20px 12px 16px 12px;
    }
    
    .service-card-title {
        font-size: 1.2rem;
        margin-bottom: 12px;
    }
    
    .service-card-desc {
        font-size: 0.95rem;
    }
    
    .service-feature-list {
        gap: 40px;
        padding: 0 15px;
        margin: 20px auto 30px auto;
    }
    
    .service-feature {
        gap: 25px;
    }
    
    .feature-img img {
        border-radius: 16px;
    }
    
    .feature-title {
        font-size: 1.1rem;
        margin-bottom: 12px;
    }
    
    .feature-desc {
        font-size: 0.9rem;
    }
    
    .service-testimonial {
        padding: 50px 15px 30px 15px;
    }
    
    .testimonial-text {
        font-size: 0.95rem;
        margin-bottom: 24px;
    }
    
    .testimonial-stars {
        font-size: 1.1rem;
        margin-bottom: 14px;
    }
    
    .testimonial-avatar {
        width: 56px;
        height: 56px;
    }
    
    .testimonial-author {
        font-size: 1.1rem;
    }
}
</style>
