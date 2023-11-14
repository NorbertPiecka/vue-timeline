import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import StartEvents from './data/events'
import Categories from './data/categories'

if(!JSON.parse(window.localStorage.getItem('events'))){
  window.localStorage.setItem('events', JSON.stringify(StartEvents));
}

if(!window.localStorage.getItem('index')){
  window.localStorage.setItem('index', 10);
}

if(!JSON.parse(window.localStorage.getItem('categories'))){
  window.localStorage.setItem('categories', JSON.stringify(Categories));
}

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
