// IMPORT ROUTER AND ROUTES
import VueRouter from 'vue-router'
import routes from './app/routes'

// HELPERS
import './helpers'

// INIT COMPONENT
// Vue.component('navbar', require('./components/Navbar.vue'));
import Master from './layouts/Master'

// IMPORT STORE
import { store } from './store'

import axios from 'axios'

// MAIN CONFIGURATION
import config from './app/config'

// IMPORT VUE MATERIAL DESIGN
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// IMPORT VALIDATOR
import VeeValidate from 'vee-validate';


axios.defaults.baseURL = config.api


// GLOBAL VUE INSTANCE
window.Vue = require('vue');


// BIND LIBRARIES TO INSTANCE
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VeeValidate)

// GLOBAL EVENTBUS
// THIS KIND OF EVENTS CAN BE EMIT AND LISTENED EVERYWHERE
window.eventBus = new Vue();


// INITIALIZE ROUTER
const router = new VueRouter({
    mode: 'history',
    routes
})

// CHECK ROUTE META PARAMETERS
router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.auth) {
            next({
                name: 'login'
            })
        } else {
            next()
        }
    }
    else if (to.matched.some(record => record.meta.requiresGuest)) {
        // this route requires guest, check if logged in
        // if true, redirect to home page.
        if (store.getters.auth) {
            next({
                name: 'home'
            })
        } else {
            next()
        }
    }
    else {
        // IF ROUTE DOESN'T HAVE ANY META PARAMETERS
        // JUST CONTINUE
        next()
    }
})


// INIT APP
const app = new Vue({
    
    // WHERE TO WRAP APPLICATION
    el: '#-main',
    
    // WRAP ROUTER
    router,
    
    // INIT STORE
    store,
    
    // WITH IMPORT, DON'T USE IF COMPONENT INITIALIZED WITH Vue.component
    components: {
        Master
    },
    
    // MAIN WRAPPER
    template: '<Master/>'
});
