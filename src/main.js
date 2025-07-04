import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';

import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faWhatsapp, faBars, faTimes, faPhone)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
