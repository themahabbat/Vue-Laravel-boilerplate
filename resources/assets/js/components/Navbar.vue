<template>

    <transition name="fade" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
      <nav v-if="show" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">{{ title || 'Brand' }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'home' }">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'user', params: { id: id } }">Random User</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                  </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>

          <ul class="navbar-nav mr-auto">
            
            <li v-if="!auth" class="nav-item">
              <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
            </li>
            <li v-if="!auth" class="nav-item">
              <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
            </li>
            <li v-if="auth" class="nav-item">
              <router-link class="nav-link" :to="{ name: 'logout' }">Logout</router-link>
            </li>

          </ul>

          <ul class="pull-right margin-none">
            <h6>{{ description }} / {{ replacedTitle }}</h6>
          </ul>
        </div>
      </nav>
    </transition>

</template>

<script>
  export default {
    // COMPONENT SELECTOR
    name: "navbar",

    // PROPERTIES
    props: {

      show: {
        type: Boolean,
        required: true
      },

      title: {
        type: String,
        required: true
      }

    },

    // COMPONENT STATE
    data() {
  
      return {
        description: this.$store.state.title
      }
  
    },

    // COMPUTED DATA (SYNCHRONIZED DATA)
    computed: {

      id(){
        return Math.floor( Math.random() * 10 )
      },

      replacedTitle() {
        return this.$store.getters.replacedTitle
      },

      auth(){
        return this.$store.getters.auth
      }

    },
  }
</script>

<style lang="scss" scoped>
  // SCOPED MEANS FOR THIS COMPONENT ONLY, NOT GLOBAL
</style>
