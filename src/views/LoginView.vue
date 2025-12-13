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
            <span class="logo__subtitle">клининговая компания</span>
          </div>
        </div>

        <h1 class="auth-title">Войти в аккаунт</h1>
        <p class="auth-subtitle">
          Пожалуйста, введите своё имя и номер телефона. Мы отправим SMS с кодом
          для подтверждения входа.
        </p>

        <form class="auth-form" @submit.prevent="submit">
          <div class="field">
            <label class="field__label">Имя</label>
            <input v-model="form.firstName" class="field__input" placeholder="Иван" />
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
            Продолжить
          </button>
      
          <p class="auth-note">
            Нажимая на кнопку, вы даёте
            <RouterLink to="/privacy-policy" target="_blank">
              согласие на обработку персональных данных
            </RouterLink>.
          </p>

          <p class="auth-note">
            Нет аккаунта?
            <RouterLink to="/register">Зарегистрироваться</RouterLink>
          </p>
        </form>
      </div>

      <div class="auth-right"></div>
    </div>
  </div>
</template>

<script setup>
// ✅ Импорты объединяем в одном блоке
import { reactive } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'

// ✅ SEO-теги
useHead({
  title: 'Вход в систему — Чистота — клининговая компания',
  meta: [
    {
      name: 'description',
      content: 'Авторизация для клиентов и сотрудников компании «Чистота».'
    },
    {
      name: 'keywords',
      content: 'вход, авторизация, чистота, клининговая компания, клининг'
    }
  ]
})

// ✅ Основная логика формы
const router = useRouter()

const form = reactive({
  firstName: '',
  phone: ''
})

const submit = () => {
  alert('Вход по SMS-коду (демо).')
  router.push('/')
}
</script>
