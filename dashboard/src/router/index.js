import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
import services from '../services/index.js'
import { setCurrentUser } from '../store/user.js'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})
// GOOD
router.beforeEach(async (to, from, next) => {
      if ( to.name !== 'Home' && to.meta.hasAuth) {
        const token = window.localStorage.getItem('token')
        if (!token) {
          next({ name: 'Home' })
        }else {
          const { data } = await services.users.getMe()
          setCurrentUser(data)
          next()
        }
      }
      else next()
})

export default router
