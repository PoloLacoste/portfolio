import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faGithub,
    faLinkedin
)

const vue = createApp(App)
vue.component('font-awesome-icon', FontAwesomeIcon)
vue.mount('#app')
