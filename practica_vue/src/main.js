import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'

import 'bootstrap/scss/bootstrap.scss'
Vue.config.productionTip = false
router.beforeEnach((to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesita permisos para entrar')
    if (Auth.chckUser()) {
      next()
    }
    router.push({ name: 'login' })
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
