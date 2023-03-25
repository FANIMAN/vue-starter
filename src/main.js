import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

const appInstance = createApp(App)
appInstance.use(store)
appInstance.use(router)
appInstance.mount('#app')
