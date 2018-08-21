<template>
   <div class="content grid">
      
      <div class="login">

         <h3 class="margin-bottom-20">Login</h3>

         <div class="form-group">
            <input type="email" name="email" id="email" class="form-control" v-model="email">
            <label for="email">Email</label>
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

   }
}
</script>
