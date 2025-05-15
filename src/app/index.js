import { createApp } from 'vue'
import App from './App.vue'
import { router, pinia } from './providers'



import '@shared/ui/assets/styles/app.scss'


const app = createApp(App)

app.use(router)
app.use(pinia)

export { app }
