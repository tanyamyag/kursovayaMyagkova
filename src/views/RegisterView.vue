<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Регистрация — Чистота — клининговая компания',
  meta: [
    { name: 'description', content: 'Зарегистрируйтесь в системе компании «Чистота» и получите доступ к персональным услугам.' }
  ]
})


import { reactive } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const form = reactive({
  firstName: '',
  lastName: '',
  middleName: '',
  city: '',
  address: '',
  phone: ''
})

const submit = () => {
  alert('Форма регистрации отправлена (демо).')
  router.push('/')
}
</script>

<template>
  <div class="page">
    <div class="auth-layout">
      <div class="auth-left">
        <button class="auth-back" type="button" @click="$router.back()">
          ← Назад
        </button>

        <div class="logo" style="margin-bottom: 18px;">
          <div class="logo__icon">Ч</div>
          <div class="logo__text">
            <span class="logo__title">Чистота</span>
            <span class="logo__subtitle"> клининговая компания</span>
          </div>
        </div>

        <h1 class="auth-title">Регистрация</h1>
        <p class="auth-subtitle">
          Пожалуйста, введите свои данные. Мы пришлём SMS для подтверждения
          учётной записи.
        </p>

        <form class="auth-form" @submit.prevent="submit">
          <div class="field">
            <label class="field__label">Имя</label>
            <input v-model="form.firstName" class="field__input" placeholder="Иван" />
          </div>
          <div class="field">
            <label class="field__label">Фамилия</label>
            <input v-model="form.lastName" class="field__input" placeholder="Иванов" />
          </div>
          <div class="field">
            <label class="field__label">Отчество</label>
            <input v-model="form.middleName" class="field__input" placeholder="Иванович" />
          </div>
          <div class="field">
            <label class="field__label">Город</label>
            <input v-model="form.city" class="field__input" placeholder="Москва" />
          </div>
          <div class="field">
            <label class="field__label">Адрес</label>
            <input
              v-model="form.address"
              class="field__input"
              placeholder="Улица, дом, квартира"
            />
          </div>

          <div class="field">
            <label class="field__label">Телефон</label>
            <div class="auth-phone">
              <div class="auth-phone__flag">
                <span class="auth-phone__flag-emoji">🇷🇺</span>
                <span>+7</span>
              </div>
              <input
                v-model="form.phone"
                class="field__input"
                placeholder="999 999-99-99"
              />
            </div>
          </div>

          <button type="submit" class="btn btn--primary" style="margin-top: 10px;">
            Зарегистрироваться
          </button>

          <p class="auth-note">
            <!-- Нажимая на кнопку, вы даёте
            <a href="#" target="_blank">согласие на обработку персональных данных</a>. -->
            Нажимая на кнопку, вы даёте
            <RouterLink to="/privacy-policy" target="_blank">
              согласие на обработку персональных данных
            </RouterLink>.
          </p>

          <p class="auth-note">
            Уже есть аккаунт?
            <RouterLink to="/login">Войти</RouterLink>
          </p>
        </form>
      </div>

      <div class="auth-right"></div>
    </div>
  </div>
</template>

