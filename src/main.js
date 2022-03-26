import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'; //Importa o módulo vue-resource

Vue.use(VueResource); //Usa o módulo vue-resource

new Vue({
  el: '#app',
  render: h => h(App)
})
