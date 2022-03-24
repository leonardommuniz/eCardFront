import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

createApp(App)
    .use(router,VueAxios,axios)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
