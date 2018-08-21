// GLOBAL VUE INSTANCE
window.Vue = require('vue');

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

Vue.use(VueRouter)

// GLOBAL EVENTBUS
// THIS KIND OF EVENTS CAN BE EMIT AND LISTENED EVERYWHERE
window.eventBus = new Vue();


// INITIALIZE ROUTER
const router = new VueRouter({
    mode: 'history',
    routes
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
