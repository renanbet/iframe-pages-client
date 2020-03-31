import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from '@/shared/services/auth.service'
import routes from './routes'

Vue.use(VueRouter)

const authService = AuthService()
const router = new VueRouter({ mode: 'history', routes })

router.beforeEach((to, from, next) => {
  if (!to.name) {
    return next('/')
  }

  let roleName = authService.getFirstRole()

  if (to.meta.roles && to.meta.roles.indexOf(roleName) === -1) {
    return next('/')
  }

  if (to.meta.requiresAuth && !authService.isAuthenticated()) {
    return next('/')
  }

  next()
})

export default router
