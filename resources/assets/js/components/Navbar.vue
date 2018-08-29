<template>

    <transition-group
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp">

      <v-toolbar
      key="toolbar"
      color="white">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

        <v-toolbar-title>Title</v-toolbar-title>


        <v-spacer></v-spacer>

          <v-toolbar-items class="hidden-sm-and-down">
            <router-link class="toolbar-link" :to="{ name: 'login' }">
              <v-btn flat v-if="!auth">
                Login
              </v-btn>
            </router-link>

            <router-link class="toolbar-link" :to="{ name: 'register' }">
              <v-btn flat v-if="!auth">
                Register
              </v-btn>
            </router-link>

            <router-link class="toolbar-link" :to="{ name: 'logout' }">
              <v-btn flat v-if="auth">
                Logout
              </v-btn>
            </router-link>
          
                      
        </v-toolbar-items>

        <v-btn color="info" flat icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn color="primary" flat icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
  </v-toolbar>

  <v-navigation-drawer
      key="drawer"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </transition-group>

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
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
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

  a.toolbar-link {
    text-decoration: none;
    color: #fff;

    button {
      height: 100% !important;
    }

  }
</style>