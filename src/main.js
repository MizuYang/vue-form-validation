import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuex from 'vuex'
import store from './vuex/index'

import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// veeValidate 全域匯入
import {
  Field,
  Form,
  ErrorMessage
} from '@/plugins/veeValidate.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('IsLoading', VueLoading)

// veeValidate 全域匯入
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.use(router)
app.use(VueAxios, axios)
app.use(Vuex)
app.use(store)
app.mount('#app')
