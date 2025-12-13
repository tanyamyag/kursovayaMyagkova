import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PricingView from '../views/PricingView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import EmployeesView from '../views/EmployeesView.vue'
import EmployeeDetailView from '../views/EmployeeDetailView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import FaqView from '../views/FaqView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/pricing', name: 'pricing', component: PricingView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/employees', name: 'employees', component: EmployeesView },
  { path: '/employees/:id', name: 'employee-detail', component: EmployeeDetailView },
  { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicyView },
  { path: '/faq', name: 'faq', component: FaqView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router