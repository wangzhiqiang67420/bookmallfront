// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
import {getCookie} from './util'


Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:8088";

axios.interceptors.request.use(
  config => {
    const userId = getCookie('userId'); //获取Cookie
    const uuid = getCookie('uuid'); //获取Cookie
    const st = getCookie('st'); //获取Cookie
    console.log("userId="+userId);
    console.log("uuid="+uuid);
    console.log("st="+st);
    
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/json',
      'userId': userId,
      'uuid': uuid,
      'st': st
    };
    // if (userId) {
    //   config.params = {
        
    //   }
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);




// 注册element-ui
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
