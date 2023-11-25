import router from './routes.js'
import services from '../services/index.js'
import { setCurrentUser } from '../store/user.js'

// GOOD
router.beforeEach(async (to, from, next) => {
      if ( to.name !== 'Home' && to.meta.hasAuth) {
        const token = window.localStorage.getItem('token')
        if (!token) {
          next({ name: 'Home' })
          const { data } = await services.user.getMe()
          setCurrentUser(data)
        }else {
          next()
        }
      }
      else next()
})

export default router