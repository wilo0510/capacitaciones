import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//importar boostrap
import { BootstrapVue} from 'bootstrap-vue'

//importar uso de font awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//importando el us de axios
//import axios from "axios";

//importando las rutas
import login from './components/login'
import Home from './components/Home'
import capacitacion from './components/capacitacion'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { path: "/", component: Home },
  { path: "/login", component: login },
  { path:"/capacitacion",component:capacitacion}
];
const router=new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
