import Login from '@/components/login/index.vue'
import Report from '@/components/report/index.vue'

const routes = [
  {
    path: '/',
    component: Login,
    name: 'login',
    meta: { requiresAuth: false }
  },
  {
    path: '/reports',
    component: Report,
    meta: { requiresauth: false },
    name: 'reports'
  }
]

export default routes
