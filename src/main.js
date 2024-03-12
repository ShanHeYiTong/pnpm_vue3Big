import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import DataVVue3 from '@kjgl77/datav-vue3'
import '@/assets/main.scss'

const app = createApp(App)

app.use(DataVVue3)
app.use(pinia)
app.use(router)

app.mount('#app')
