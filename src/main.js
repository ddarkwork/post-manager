import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
//import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Vue.use(BootstrapVue)

const app = createApp(App)

app.use(router)

app.mount('#app')
