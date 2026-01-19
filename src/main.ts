import { createApp } from 'vue'
import App from './App.tsx'

import './styles.css'

import router from './router.ts'

createApp(App).use(router).mount('#app')
