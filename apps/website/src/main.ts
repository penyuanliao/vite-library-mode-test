import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {isBoolean, counter} from '@mkt/utils';

const app = createApp(App)
console.log(isBoolean(true), counter(10));

app.use(createPinia())
app.use(router)

app.mount('#app')
