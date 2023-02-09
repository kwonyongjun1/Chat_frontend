import { createRouter, createWebHistory } from 'vue-router'
import ChatMain from '../components/ChatMain'
import ChatLogin from '../components/login/ChatLogin'
const routes = [
  {
    path: '/',
    name : 'ChatMain',
    component: ChatMain
  },
  {
    path: '/login',
    name : 'ChatLogin',
    component: ChatLogin
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
