import 'vant/lib/index.css';
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vant from 'vant';

const pinia = createPinia()

const app = createApp(App)


app.use(vant)
app.use(router)
app.use(pinia)
app.mount('#app')
