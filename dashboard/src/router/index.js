import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Credentials= () => import('../views/Credentials/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/feedbacks',
      name: 'Feedbacks',
      component: Feedbacks,
      meta : {
        hasAuth: true
      }
    },
    {
      path: '/credentials',
      name: 'Credentials',
      component: Credentials,
      meta : {
        hasAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect : { name: 'Home'}
    }
  ]
})

export default router
