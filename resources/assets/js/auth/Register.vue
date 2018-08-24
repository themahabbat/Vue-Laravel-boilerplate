<template>
   <div class="content">
      <div class="row justify-content-center">
         <div class="col-8 col-sm-8 col-md-3 login">

            <h3 class="margin-bottom-20">Register</h3>

            <div class="form-group">
               <input type="email" name="email" id="email" class="form-control" v-model="email">
               <label for="email">Email</label>
            </div>

            <div class="form-group">
               <input type="password" name="password" id="password" class="form-control" v-model="password">
               <label for="password">Password</label>
            </div>

            <button class="btn btn-primary" @click="login">Login</button>

         </div>
         
      </div>

   </div>
</template>

<script>
export default {
   name: 'Login',

   data(){

      return {
         email: '',
         password: ''
      }

   },

   methods: {

      login(){
         
         this.$store.dispatch('login', {
            email: this.email,
            password: this.password
         }).then(res => {
            this.$router.push({ name: 'home' })
         })
      }

   }

}
</script>

<style lang="scss" scoped>

.login {}

</style>
