import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import messages from './locales';
import router from './router'

const i18n = createI18n({
    locale: 'fr', // langue par défaut
    fallbackLocale: 'fr', // langue de secours si la langue actuelle n'a pas de traduction
    messages,
  });

const app = createApp(App)

app.use(i18n);
app.use(router)

app.mount('#app')
