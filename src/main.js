import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import useAuth from './composables/useAuth'

const app = createApp(App)
app.use(router)
useAuth(app)
app.mount('#app')
