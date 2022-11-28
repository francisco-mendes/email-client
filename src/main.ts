import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { addIcons, OhVueIcon } from "oh-vue-icons";
import { IoPencilSharp } from "oh-vue-icons/icons";

const app = createApp(App)

app.use(createPinia())
app.use(router)

addIcons(IoPencilSharp);

app.component("v-icon", OhVueIcon);

app.mount('#app')
