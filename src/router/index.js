import { createRouter, createWebHistory } from 'vue-router'
import ChatHome from '../components/chat/ChatHome'
import ChatLogin from '../components/login/ChatLogin'
const routes = [
  {
    path: '/',
    name : 'ChatHome',
    component: ChatHome,
    beforeEnter(to,from,next){
      if(sessionStorage.getItem('userId') == null){
        next({name : 'ChatLogin'})
      }else{
        next();
      }
    }
  },
  {
    path: '/login',
    name : 'ChatLogin',
    component: ChatLogin,

  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
