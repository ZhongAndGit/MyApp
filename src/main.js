// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router/router'
import {store} from './vuex/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'hash',
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})

