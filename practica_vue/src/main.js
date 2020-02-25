import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'

import 'bootstrap/scss/bootstrap.scss'
Vue.config.productionTip = false
router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesita permisos para entrar')
    let user = await Auth.chckUser()
    if (user == null) {
      next({
        name: 'login'
      })
      return
    }
    next()
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
