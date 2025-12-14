<template>
  <div>
    <section class="hero">
      <div class="container hero__inner">
        <div>
          <div class="hero__badge">
            <span>Новая уборка —</span>
            <strong>как переезд в свежую квартиру</strong>
          </div>
          <h1 class="hero__title">
            Клининговая компания<br />
            с уникальным подходом
          </h1>
          <p class="hero__subtitle">
            Бережно относимся к вещам и времени клиентов. Только проверенные
            чистящие средства и&nbsp;обученные сотрудники.
          </p>
          <div class="hero__actions">
            <RouterLink to="/pricing" class="btn btn--primary">
              Рассчитать стоимость
            </RouterLink>
            <RouterLink to="/about" class="btn btn--ghost">
              О компании
            </RouterLink>
          </div>
          <div class="hero__metrics">
            <div>
              <span class="hero__metric-value">4,9</span>
              Средняя оценка клиентов
            </div>
            <div>
              <span class="hero__metric-value">3500+</span>
              Регулярных заказов в месяц
            </div>
            <div>
              <span class="hero__metric-value">7 лет</span>
              Опыт работы специалистов
            </div>
          </div>
        </div>

        <div class="hero__right">
          <!-- <div class="hero__shape"></div>
          <div class="hero__photo"></div> -->
          <img src="/src/assets/chistota.jpg" alt="Чистота" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header">
          <div>
            <h2 class="section__title">Услуги клининга</h2>
            <p class="section__subtitle">
              Мы берём на себя рутину, чтобы вы могли заниматься важным.
            </p>
          </div>
          <RouterLink to="/pricing" class="btn btn--ghost">
            Весь прайс
          </RouterLink>
        </div>

                <div
          class="services-carousel"
          @mouseenter="isCarouselHovered = true"
          @mouseleave="isCarouselHovered = false"
        >
          <button
            v-if="isCarouselHovered"
            type="button"
            class="carousel-arrow carousel-arrow--left"
            @click="prevService"
          >
            ‹
          </button>

          <div class="cards-grid">
            <article
              v-for="service in visibleServices"
              :key="service.id"
              class="card"
            >
              <div
                class="card__image"
                :style="{ backgroundImage: 'url(' + service.image + ')' }"
              ></div>
              <h3 class="card__title">{{ service.title }}</h3>
              <p class="card__text">
                {{ service.description }}
              </p>
              <div class="card__footer">
                <span class="badge">{{ service.price }}</span>
                <span>{{ service.note }}</span>
              </div>
            </article>
          </div>

          <button
            v-if="isCarouselHovered"
            type="button"
            class="carousel-arrow carousel-arrow--right"
            @click="nextService"
          >
            ›
          </button>
        </div>

      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header">
          <div>
            <h2 class="section__title">Наши профессионалы</h2>
            <p class="section__subtitle">
              Все сотрудники проходят обучение и проверку службы безопасности.
            </p>
          </div>
          <RouterLink to="/employees" class="btn btn--ghost">
            Все сотрудники
          </RouterLink>
        </div>

        <div class="employees-grid">
          <article
            v-for="person in employees.slice(0, 3)"
            :key="person.id"
            class="employee-card"
          >
            <RouterLink :to="`/employees/${person.id}`">
              <div
                class="employee-card__photo"
                :style="{ backgroundImage: 'url(' + person.photo + ')' }"
              ></div>
              <h3 class="employee-card__name">{{ person.shortName }}</h3>
              <p class="employee-card__role">{{ person.role }}</p>
              <p class="employee-card__meta">
                Стаж: {{ person.experience }} · Рейтинг {{ person.rating.toFixed(2) }}
              </p>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { employees } from '../data/employees'

const services = [
  {
    id: 1,
    title: 'Генеральная уборка квартиры',
    price: 'от 2 900 ₽',
    note: 'от 15 м²',
    description:
      'Глубокая очистка всех поверхностей, удаление сложных загрязнений, свежий воздух в доме.',
    image: new URL('../assets/cleaning1.jpg', import.meta.url).href
  },
  {
    id: 2,
    title: 'После строительных и ремонтных работ',
    price: 'от 4 300 ₽',
    note: 'за объект от 15 м²',
    description:
      'Избавим помещение от строительной пыли и следов ремонта, вывезем не крупный мусор.',
    image: new URL('../assets/cleaning2.jpg', import.meta.url).href
  },
  {
    id: 3,
    title: 'Влажная уборка',
    price: 'от 1 300 ₽',
    note: 'за услугу',
    description:
      'Регулярная влажная уборка для поддержания свежести и чистоты поверхностей.',
    image: new URL('../assets/cleaning3.jpg', import.meta.url).href
  },
  {
    id: 4,
    title: 'Поддерживающая уборка',
    price: 'от 1 000 ₽',
    note: 'раз в неделю',
    description:
      'Поддерживаем порядок между генеральными уборками, чтобы дома всегда было уютно.',
    image: new URL('../assets/cleaning4.jpg', import.meta.url).href
  },
  {
    id: 5,
    title: 'Мойка фасадов',
    price: 'от 5 300 ₽',
    note: 'за 15 м²',
    description:
      'Профессиональная мойка фасадов с использованием безопасной химии.',
    image: new URL('../assets/cleaning5.jpg', import.meta.url).href
  },
  {
    id: 6,
    title: 'Чистка мягкой мебели',
    price: 'от 1 500 ₽',
    note: 'за одно изделие',
    description:
      'Глубокая чистка мягкой мебели от пятен, запахов и аллергенов.',
    image: new URL('../assets/cleaning6.jpg', import.meta.url).href
  },
  {
    id: 7,
    title: 'Уборка офисных помещений',
    price: 'от 8 000 ₽',
    note: 'в неделю за 70 м²',
    description:
      'Комплексная уборка офисов, создающая комфортную рабочую атмосферу.',
    image: new URL('../assets/cleaning7.jpg', import.meta.url).href
  },
  {
    id: 8,
    title: 'Мойка окон',
    price: 'от  700 ₽',
    note: 'за окно',
    description:
      'Кристально чистые окна без разводов внутри и снаружи.',
    image: new URL('../assets/cleaning8.jpg', import.meta.url).href
  }
]

const visibleCount = 3
const currentServiceIndex = ref(0)
const isCarouselHovered = ref(false)
let intervalId

const visibleServices = computed(() => {
  const result = []
  const total = services.length
  for (let i = 0; i < visibleCount; i += 1) {
    result.push(services[(currentServiceIndex.value + i) % total])
  }
  return result
})

const nextService = () => {
  currentServiceIndex.value =
    (currentServiceIndex.value + 1) % services.length
}

const prevService = () => {
  currentServiceIndex.value =
    (currentServiceIndex.value - 1 + services.length) % services.length
}

onMounted(() => {
  intervalId = setInterval(() => {
    if (!isCarouselHovered.value) {
      nextService()
    }
  }, 10000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
