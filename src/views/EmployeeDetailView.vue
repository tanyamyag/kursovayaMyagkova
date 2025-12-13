<template>
  <div class="page" v-if="employee">
    <div class="container">
      <p class="breadcrumb">
        Главная ·
        <RouterLink to="/employees">Сотрудники</RouterLink>
        · {{ employee.name }}
      </p>

      <div class="employee-layout">
        <div class="employee-photo-big">
          <img :src="employee.photo" :alt="employee.name" />
        </div>

        <div>
          <div class="employee-main-card">
            <div class="employee-main-header">
              <h1>{{ employee.name }}</h1>
              <p>{{ employee.description }}</p>
              <div style="margin-top: 16px; display:flex; align-items:center; gap:12px;">
                <button class="btn btn--primary">Записаться онлайн</button>
                <div>
                  <span class="rating-stars">
                    <span v-for="star in 5" :key="star">
                      {{ star <= Math.round(employee.rating) ? '★' : '☆' }}
                    </span>
                  </span>
                  <span style="margin-left: 6px; font-size: 14px;">
                    {{ employee.rating.toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>

            <div class="employee-main-meta">
              <div class="employee-meta-pill">
                <div class="employee-meta-label">Должность</div>
                <div class="employee-meta-value">{{ employee.role }}</div>
              </div>
              <div class="employee-meta-pill">
                <div class="employee-meta-label">Стаж</div>
                <div class="employee-meta-value">{{ employee.experience }}</div>
              </div>
            </div>
          </div>

          <div class="employee-cert">
            <div class="employee-cert-box">
              <strong>Сертификат</strong>
              <ul>
                <li>дата выдачи: {{ employee.certificate.issued }}</li>
                <li>действует до: {{ employee.certificate.validUntil }}</li>
              </ul>
            </div>
            <div class="employee-cert-box">
              <strong>{{ employee.course }}</strong>
              <p style="margin-top:8px;">
                Сотрудник прошёл обучение в профильных учебных центрах и регулярно
                повышает квалификацию. В работе применяет современные методы очистки
                и бережно относится к имуществу клиентов.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="section" style="padding-top: 0;">
        <div class="section__header">
          <h2 class="section__title">Отзывы клиентов</h2>
          <button
            type="button"
            class="btn btn--primary"
            @click="isAddingReview = !isAddingReview"
          >
            {{ isAddingReview ? 'Отменить' : 'Добавить отзыв' }}
          </button>
        </div>

        <form
          v-if="isAddingReview"
          class="review-form"
          @submit.prevent="submitReview"
        >
          <div class="review-form__field">
            <span>Ваш отзыв</span>
            <textarea
              v-model="newReviewText"
              required
              maxlength="500"
              placeholder="Напишите пару слов о работе сотрудника"
            ></textarea>
          </div>

          <div class="review-form__field">
            <span>Оценка</span>
            <div class="review-form__stars">
              <button
                v-for="star in 5"
                :key="star"
                type="button"
                class="star-button"
                :class="{ 'star-button--active': star <= newReviewRating }"
                @click="newReviewRating = star"
              >
                ★
              </button>
              <span class="review-form__rating-value">
                {{ newReviewRating }} / 5
              </span>
            </div>
          </div>

          <button type="submit" class="btn btn--primary">
            Сохранить отзыв
          </button>
        </form>

        <div class="reviews-grid">
          <article
            v-for="review in reviews"
            :key="review.id"
            class="review-card"
          >
            <div class="review-header">
              <span class="review-service">{{ review.service }}</span>
              <span class="review-date">{{ review.date }}</span>
            </div>
            <div class="review-client">{{ review.client }}</div>
            <div class="rating-stars" style="margin-bottom: 6px;">
              <span v-for="star in 5" :key="star">
                {{ star <= review.rating ? '★' : '☆' }}
              </span>
            </div>
            <p>{{ review.text }}</p>
          </article>
        </div>
      </section>

      <section class="section" style="padding-top: 0;">
        <div
          class="card"
          style="display:flex; flex-wrap:wrap; gap:24px; align-items:center; padding:24px;"
        >
          <div>
            <h2 class="section__title" style="font-size: 22px;">
              Записаться на клининг
            </h2>
            <p class="section__subtitle">
              Заполните форму на странице регистрации, и мы свяжемся с вами в ближайшее время.
            </p>
          </div>
          <RouterLink to="/register" class="btn btn--primary">
            Оформить заявку
          </RouterLink>
        </div>
      </section>
    </div>
  </div>

  <div v-else class="page">
    <div class="container">
      <p class="breadcrumb">
        Главная · <RouterLink to="/employees">Сотрудники</RouterLink>
      </p>
      <h1 class="page__title">Сотрудник не найден</h1>
      <p class="hero__subtitle">
        Возможно, профиль был перемещён или удалён. Вернитесь к списку сотрудников и выберите другого специалиста.
      </p>
      <RouterLink to="/employees" class="btn btn--primary">
        К списку сотрудников
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
// ✅ Импорты вверху
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { employees } from '../data/employees'

// ✅ SEO-блок
useHead({
  title: 'Сотрудник — Чистота — клининговая компания',
  meta: [
    {
      name: 'description',
      content: 'Профиль сотрудника клининговой компании «Чистота»: опыт, специализация и отзывы клиентов.'
    },
    {
      name: 'keywords',
      content: 'сотрудник, клининг, уборка, чистота, персонал, клининговая компания'
    }
  ]
})

// ✅ Основная логика компонента
const route = useRoute()
const employeeId = computed(() => Number(route.params.id))
const employee = computed(() => employees.find((e) => e.id === employeeId.value))

const reviews = ref([])

watch(
  employee,
  (value) => {
    if (value && Array.isArray(value.reviews)) {
      reviews.value = [...value.reviews]
    }
  },
  { immediate: true }
)

const isAddingReview = ref(false)
const newReviewText = ref('')
const newReviewRating = ref(5)

const submitReview = () => {
  if (!employee.value || !newReviewText.value.trim()) return

  const newReview = {
    id: Date.now(),
    client: 'Гость',
    service: 'Пользовательский отзыв',
    date: new Date().toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    rating: newReviewRating.value,
    text: newReviewText.value.trim()
  }

  reviews.value = [newReview, ...reviews.value]
  newReviewText.value = ''
  newReviewRating.value = 5
  isAddingReview.value = false
}
</script>
