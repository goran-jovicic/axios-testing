import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import PostsList from '@/components/PostsList'
import UsersList from '@/components/UsersList'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/posts', component: PostsList },
  { path: '/users', component: UsersList}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
