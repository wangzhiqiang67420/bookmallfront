import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import BookIndex from '@/components/BookIndex'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/bookIndex',
      name: 'BookIndex',
      component: BookIndex
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
