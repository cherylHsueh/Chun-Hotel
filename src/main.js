import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// [ CSS Entry ]
import './assets/sass/all.scss'

// [ Plugins ]
import dayjs from './plugins/dayjs'
import fontAwesome from './plugins/fontAwesome'
import calendar from './plugins/calendar'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(dayjs)
app.use(fontAwesome)
app.use(calendar)
app.use(router)
app.use(store)
app.mount('#app')
