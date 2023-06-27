import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemMusic from '../views/ItemMusic.vue'
import Search from '../views/Search'
import InfoUser from '../views/InfoUser'
import Login from '../views/Login'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/itemMusic',
    name: 'itemMusic',
    component: ItemMusic
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/infoUser',
    name: 'InfoUSer',
    beforeEnter:(to,from,next)=>{
      console.log(store.state.isLogin);
      if(store.state.isLogin ||store.state.loginInfo.length || localStorage.getItem('token')){
        next()
      }else{
        next('/login')
      }
    },
    component:InfoUser
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 全局前置路由
router.beforeEach((to,from)=>{
  if(to.path=='/login'){
    store.state.isFooterShow=false
  }else{
    store.state.isFooterShow=true
  }
})
export default router
