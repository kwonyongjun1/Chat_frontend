import { createRouter, createWebHistory } from 'vue-router'
import ChatLogin from '../components/login/ChatLogin'
import ChatMain from '../components/ChatMain'
const routes = [
  /**
   * 메인 페이지
   */
  {
    path: '/',
    name : 'ChatMain',
    component: ChatMain,
    //router가 컴포넌트를 빌드하기 전에 sessionStorage에 ID 정보가있는지 확인
    beforeEnter(to,from,next){
      if(sessionStorage.getItem('userId') == null){
        next({name : 'ChatLogin'})
      }else{
        next();
      }
    }
  },
  /**
   * 로그인 페이지
   */
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
