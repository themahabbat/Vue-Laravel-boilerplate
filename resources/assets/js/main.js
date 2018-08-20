// GLOBAL VUE INSTANCE
window.Vue = require('vue');

// INIT COMPONENT
// Vue.component('navbar', require('./components/Navbar.vue'));
import Navbar from './components/Navbar.vue'

// GLOBAL EVENTBUS
// THIS KIND OF EVENTS CAN BE EMIT AND LISTENED EVERYWHERE
window.eventBus = new Vue();

// IMPORT STORE
import { store } from './store'

// INIT APP
const app = new Vue({
    el: '#-app',

    // INIT STORE
    store,
    
    // WITH IMPORT, DON'T USE IF COMPONENT INITIALIZED WITH Vue.component
    components: {
        Navbar
    }
});
