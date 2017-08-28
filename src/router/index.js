import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/Pages/Hello/Hello'
import Login from '@/Pages/Login/Login';

Vue.use(Router)
const routes = [
  { path: '/', name: 'Hello', component: Hello },
  { path: '/login', name: 'Login', component: Login }
  ]
  export default new Router({
    routes: routes,
    mode: 'history'
  })