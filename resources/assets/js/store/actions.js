// ACTIONS ARE ASYNC AND CAN DO / COMMIT MULTIPLE MUTATIONS
export default {

   // MULTIPLE ACTIONS(JOBS) WITH JUST ONE MUTATION

   changeTitle({commit}, title) {
      commit('changeTitle', title)
   },
   
   clearTitle({commit}) {
      commit('changeTitle', '')
   }

}