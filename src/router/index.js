import Vue from 'vue'
import Router from 'vue-router'
import vuex from '../store'
import iView from 'iview'
import contacts from './contacts'

const NotFound = () => import('@/components/NotFound')
Vue.use(Router)
Vue.use(iView)

const router = new Router({
  mode: 'history',
  routes: [
    ...contacts,
    {
      name: '404',
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  vuex.dispatch('checkIsLogin')
    .then((res) => {
      return next()
    })
    .catch((err) => {
      console.log(err)
      return next({name: 'Login'})
    })
  next()
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
})
export default router
