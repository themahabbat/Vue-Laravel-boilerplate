<template>
  <div class="fragment">
  
    <transition name="fade" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
      <nav v-if="show" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">{{ title || 'Brand' }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
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
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>

          <ul class="pull-right margin-none">
            <h6>{{ description }} / {{ replacedTitle }}</h6>
          </ul>
        </div>
      </nav>
    </transition>
  
    <fixed class="width-full text-center" to="bottom">
      <button class="btn btn-primary radius-2" @click="toggleAnimation">Toggle Animation</button>
      <button class="btn btn-info radius-2" @click="sampleEvent">Emit EventBus Event</button>
      <button class="btn btn-info radius-2" @click="changeTitle">Change Title (Dispatch to Store)</button>
      <button class="btn btn-info radius-2" @click="clearTitle">Clear Title (Dispatch with same mutation)</button>
    </fixed>
  
  </div>
</template>

<script>
  import Fixed from './Fixed.vue';
  
  export default {
    // COMPONENT SELECTOR
    name: "navbar",
  
    props: {
      // PROPERTIES
  
      title: String,
      auth: {
        type: Boolean,
        required: true
      }
    },
  
    components: {
      // INCLUDED COMPONENTS
  
      Fixed
    },
  
    // INITIAL STATE (DOESN'T SYNCHRONIZE WITH STORE)
    data() {
  
      return {
        show: false,
        description: this.$store.state.title
      }
  
    },

    // COMPUTED DATA (SYNCHRONIZES WITH STORE AUTOMATICALLY)
    computed: {

      replacedTitle() {
        return this.$store.getters.replacedTitle
      }

    },
  
    // WHEN COMPONENT CREATED
    created() {

      // LISTEN FOR EVENTS
      eventBus.$on('sampleEvent', (data) => alert('EVENT RECEIVED: ' + data))
  
    },

    // CLEAR MEMORY BEFORE DESTROY
    beforeDestroy(){
      eventBus.$off('sampleEvent')
    },
  
    methods: {
  
      toggleAnimation() {
        this.show = !this.show;
      },
  
      sampleEvent() {

        // MAKE AND CALL EVENTS
        eventBus.$emit('sampleEvent', Math.random() * 100)
      },

      changeTitle(){
        this.$store.dispatch('changeTitle', 'Changed!')
      },

      clearTitle(){
        this.$store.dispatch('clearTitle')
      }
  
    }
  
  }
</script>

<style lang="scss" scoped>
  // SCOPED MEANS FOR THIS COMPONENT ONLY, NOT GLOBAL
</style>
