import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import axios from 'axios'

import App from './App.vue'
import home from './pages/HomePage.vue'
import boards from './pages/UserBoards.vue'
import detail from './pages/BoardDetail.vue'

const routes = [
  { name: 'home', path: '/', component: home },
  { name: 'boards', path: '/boards', component: boards },
  { name: 'detail', path: '/detail', component: detail },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

const app = createApp(App)

app.config.globalProperties.$axios = axios
app.config.globalProperties.$userList = []

app.use(router)
app.mount('#app')
