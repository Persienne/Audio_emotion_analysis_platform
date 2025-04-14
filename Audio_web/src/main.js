import { createApp } from 'vue'
import './style.css'
import 'font-awesome/css/font-awesome.min.css'
import router from './router/index.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
