import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(createPinia())
app.mount('#app')
