<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Цены — Чистота — клининговая компания',
  meta: [
    { name: 'description', content: 'Актуальные цены на уборку квартир, домов и офисов от клининговой компании «Чистота».' }
  ]
})


import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const items = [
  { name: 'Генеральная уборка квартиры', price: 2900 },
  { name: 'После строительных и ремонтных работ', price: 4300 },
  { name: 'Влажная уборка', price: 1300 },
  { name: 'Поддерживающая уборка', price: 1000 },
  { name: 'Мойка фасадов', price: 5300 },
  { name: 'Чистка мягкой мебели', price: 1500 },
  { name: 'Уборка офисных помещений', price: 1700 },
  { name: 'Мойка окон (за одно стандартное окно)', price: 700 }

]

const form = ref({
  type: 'general',
  area: 15,
  frequency: 'once'
})

const price = ref(null)

const calculate = () => {
  let base = 200 // цена за м²
  if (!form.value.area) return

  if (form.value.type === 'post') base = 300
  if (form.value.type === 'regular') base = 90
  if (form.value.type === 'support') base = 70
  if (form.value.type === 'facade') base = 370
  if (form.value.type === 'furniture') base = 110
  if (form.value.type === 'office') base = 120

  let result = base * form.value.area

  if (form.value.frequency === 'weekly') result *= 0.95
  if (form.value.frequency === 'monthly') result *= 0.97

  price.value = Math.round(result / 100) * 100
}
</script>


<template>
  <div class="page">
    <div class="container">
      <p class="breadcrumb">Главная · Стоимость услуг</p>
      <h1 class="page__title">Стоимость услуг компании</h1>
      <p class="hero__subtitle" style="max-width: 520px; margin-bottom: 26px;">
        Ниже представлены базовые цены. Точную стоимость вы можете узнать, оставив заявку —
        менеджер уточнит детали и предложит лучшее решение.
      </p>

      <div class="card" style="margin-bottom: 28px; padding: 20px 24px;">
        <div class="section__header" style="margin-bottom: 0;">
          <div>
            <h2 class="section__title" style="font-size: 22px;">Рассчитать стоимость</h2>
            <p class="section__subtitle">
              Укажите параметры помещения — предварительный расчёт появится ниже.
            </p>
          </div>
        </div>

        <form class="auth-form" @submit.prevent="calculate">
          <div class="field">
            <label class="field__label">Тип уборки</label>
            <select v-model="form.type" class="field__input">
              <option value="general">Генеральная уборка квартиры</option>
              <option value="regular">Влажная уборка</option>
              <option value="post">После ремонта</option>
              <option value="support">Поддерживающая уборка</option>
              <option value="facade">Мойка фасадов</option>
              <option value="office">Уборка офисных помещений</option>
            </select>
          </div>

          <div class="field">
            <label class="field__label">Площадь, м² (от 15 кв.м.)</label>
            <input
              v-model.number="form.area"
              type="number"
              min="15"
              max="300"
              class="field__input"
              placeholder="Например, 25"
            />
          </div>

          <div class="field">
            <label class="field__label">Частота</label>
            <select v-model="form.frequency" class="field__input">
              <option value="once">Разовая уборка</option>
              <option value="weekly">Раз в неделю</option>
              <option value="monthly">Раз в месяц</option>
            </select>
          </div>

          <button type="submit" class="btn btn--primary" style="margin-top: 4px; width: fit-content;">
            Рассчитать
          </button>
        </form>

        <div v-if="price" style="margin-top: 20px;">
          <p class="section__subtitle">
            Ориентировочная стоимость уборки:
          </p>
          <div class="stat-card" style="display:inline-block; min-width: 220px;">
            <div class="stat-card__value">{{ price.toLocaleString('ru-RU') }} ₽</div>
            <div class="stat-card__label">
              Итоговая цена может отличаться после уточнения деталей у менеджера.
            </div>
          </div>
        </div>
      </div>

      <section class="section" style="padding-top: 0;">
        <div class="section__header">
          <h2 class="section__title">Стоимость услуг</h2>
        </div>

        <div class="pricing-table">
          <div class="pricing-row" v-for="item in items" :key="item.name">
            <span class="pricing-row__name">{{ item.name }}</span>
            <span>от {{ item.price.toLocaleString('ru-RU') }} ₽</span>
          </div>
        </div>
      </section>

      <section class="section" style="padding-top: 32px;">
        <div class="card" style="display:flex; gap:24px; align-items:center; padding:24px;">
          <div>
            <h2 class="section__title" style="font-size: 22px;">Готовы записаться на уборку?</h2>
            <p class="section__subtitle">
              Оставьте контакты — мы перезвоним в течение 10 минут, чтобы подтвердить заявку.
            </p>
          </div>
          <RouterLink to="/register" class="btn btn--primary">
            Оставить заявку
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

