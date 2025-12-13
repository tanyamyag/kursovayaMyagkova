<template>
  <div class="page">
    <div class="container">
      <p class="breadcrumb">Главная · О компании</p>
      <h1 class="page__title">О компании «Чистота»</h1>

      <p class="hero__subtitle" style="max-width: 560px; margin-bottom: 26px;">
        Мы помогаем людям возвращаться в чистый и свежий дом после рабочего дня.
        Для этого собрали команду профессионалов, которым действительно можно доверить
        своё пространство.
      </p>

      <div class="hero__right">
        <img src="/src/assets/chistota.jpg" alt="Чистота" />
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-card__value">4,9</div>
          <div class="stat-card__label">Средняя оценка клиентов</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">5</div>
          <div class="stat-card__label">лет на рынке</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">3500+</div>
          <div class="stat-card__label">заказов в месяц</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">Более 50</div>
          <div class="stat-card__label">сотрудников в штате</div>
        </div>
      </div>

      <section class="section">
        <div class="section__header">
          <div>
            <h2 class="section__title">Почему нас выбирают</h2>
          </div>
        </div>
        <div class="cards-grid">
          <article class="card">
            <h3 class="card__title">Гарантия аккуратности</h3>
            <p class="card__text">
              Используем только безопасную бытовую химию и проверенные расходники,
              работаем по чек-листам, чтобы не пропустить ни одной детали.
            </p>
          </article>

          <article class="card">
            <h3 class="card__title">Прозрачная стоимость</h3>
            <p class="card__text">
              Фиксированная цена за услугу, без скрытых платежей. Вы заранее знаете,
              сколько будет стоить уборка.
            </p>
          </article>

          <article class="card">
            <h3 class="card__title">Обученные специалисты</h3>
            <p class="card__text">
              Каждый сотрудник проходит обучение и стажировку, а также проверку службы безопасности.
            </p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="section__header">
          <div>
            <h2 class="section__title">Наши филиалы</h2>
            <p class="section__subtitle">
              Работаем по Москве и ближайшему Подмосковью. Точное покрытие уточняйте у оператора.
            </p>
          </div>
        </div>
        <div class="card" style="padding: 0; overflow: hidden;">
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4d353b0a3b626b3e4f0b3c9f9b9f3e7d33f7dfb8e3a9f71f1d4a2f566f0a1c0f&amp;source=constructor"
            width="100%"
            height="360"
            frameborder="0"
          ></iframe>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// ✅ SEO
import { useHead } from '@vueuse/head'

useHead({
  title: 'О нас — Чистота — клининговая компания',
  meta: [
    {
      name: 'description',
      content:
        'Узнайте больше о компании «Чистота». Профессиональная команда, современное оборудование и забота о клиентах.'
    },
    {
      name: 'keywords',
      content: 'о нас, чистота, клининговая компания, уборка, клининг, персонал, услуги уборки'
    }
  ]
})
</script>
