import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BookIndex from '@/components/BookIndex'
import Register from '@/components/Register'
import BookList from '@/components/BookList'
import ShoppingCart from '@/components/ShoppingCart'
import BookDetail from '@/components/BookDetail'
import CartOrder from '@/components/CartOrder'
import OrderList from '@/components/OrderList'
import UserInfo from '@/components/UserInfo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookIndex',
      component: BookIndex
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
    },{
      path: '/bookList',
      name: 'BookList',
      component: BookList
    },{
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },{
      path: '/bookDetail',
      name: 'BookDetail',
      component: BookDetail
    },{
      path: '/cartOrder',
      name: 'CartOrder',
      component: CartOrder
    },{
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    },{
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
