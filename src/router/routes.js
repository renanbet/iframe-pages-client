import Login from '@/components/login'
import Home from '@/components/home'
import Admin from '@/components/admin'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { requiresauth: false }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresauth: true, roles: ['user'] }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresauth: true, roles: ['admin'] }
  }
]

export default routes
