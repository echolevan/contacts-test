import Vue from 'vue'
import Router from 'vue-router'
import vuex from '../store'
import iView from 'iview'

const Home = () => import('@/components/home/Home')
const Login = () => import('@/components/login/Login')
const NotFound = () => import('@/components/NotFound')
Vue.use(Router)
Vue.use(iView)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      name: '404',
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  vuex.dispatch('checkIsLogin')
    .then((res) => {
      if (res === 'NO_LOGIN') {
        return next({name: 'LOGIN'})
      }
      return next()
    })
    .catch((err) => {
      console.log(err)
      next()
    })
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
})
export default router
