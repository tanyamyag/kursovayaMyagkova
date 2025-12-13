<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Наши сотрудники — Чистота — клининговая компания',
  meta: [
    { name: 'description', content: 'Познакомьтесь с нашими сотрудниками. Опытные специалисты по уборке квартир, домов и офисов.' }
  ]
})

import { RouterLink } from 'vue-router'
import { employees } from '../data/employees'
</script>


<template>
  <div class="page">
    <div class="container">
      <p class="breadcrumb">Главная · Сотрудники</p>
      <h1 class="page__title">Наши сотрудники</h1>
      <p class="hero__subtitle" style="max-width: 540px; margin-bottom: 26px;">
        Сотрудники «Чистоты» — это люди, которые любят порядок и считают уборку
        своим ремеслом. Мы тщательно отбираем специалистов и регулярно обучаем их.
        Нажмите на карточку сотрудника, чтобы узнать о нём подробнее.
      </p>

      <div class="employees-grid" style="margin-bottom: 32px;">
        <RouterLink
          v-for="person in employees"
          :key="person.id"
          :to="`/employees/${person.id}`"
          class="employee-card"
        >
          <div
            class="employee-card__photo"
            :style="{ backgroundImage: 'url(' + person.photo + ')' }"
          ></div>
          <h3 class="employee-card__name">{{ person.name }}</h3>
          <p class="employee-card__role">{{ person.role }}</p>
          <p class="employee-card__meta">
            Стаж: {{ person.experience }} · Рейтинг {{ person.rating.toFixed(2) }}
          </p>
          <div style="margin-top: 10px;">
            <span class="tag">
              ⭐ {{ person.rating.toFixed(1) }} · Профиль
            </span>
          </div>
        </RouterLink>
      </div>

      <section class="section" style="padding-top: 0;">
        <div class="card" style="padding: 20px 24px;">
          <h2 class="section__title" style="font-size: 22px; margin-bottom: 6px;">
            Хотите записаться к определённому специалисту?
          </h2>
          <p class="section__subtitle" style="margin-bottom: 16px;">
            Укажите имя сотрудника в комментарии к заявке — мы постараемся подобрать
            удобное время именно с ним.
          </p>
          <RouterLink to="/register" class="btn btn--primary">
            Оформить заявку
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

