import Vue from 'vue'
import Vuex from 'vuex'

// INITIALIZE VUEX INSIDE MAIN VUE INSTANCE
Vue.use(Vuex)

// IMPORT ALL ACTIONS
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const store = new Vuex.Store({
   
   // INITIAL STATE
   state,
   
   // COMPUTED STATE
   getters,
   
   // MUTATIONS (SYNC: FUNCTIONS WHICH CAN CHANGE STATE)
   mutations,

   // ACTIONS (ASYNC: FUNCTIONS WHICH DISPATCHES MUTATIONS)
   actions
   
})