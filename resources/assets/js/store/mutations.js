// MUTATIONS ARE SYNC CHANGES

export default {

   changeTitle(state, title) {
      state.title = title
   },

   login(state, token) {
      state.token = token
   },

   logout(state) {
      state.token = null
   }

}