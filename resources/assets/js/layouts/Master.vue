<template>
    <v-app>
        <v-content>

            <navbar :title="title" :show="show"/>

            <v-container fluid>
                <transition name="router-transition" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>

            <fixed class="width-full text-center" to="bottom">
                <button class="btn btn-primary radius-2" @click="toggleAnimation">Toggle Animation</button>
                <button class="btn btn-primary radius-2" @click="sampleEvent">Emit EventBus Event</button>
                <button class="btn btn-warning radius-2" @click="changeTitle">Change Title (Dispatch to Store)</button>
                <button class="btn btn-warning radius-2" @click="clearTitle">Clear Title (Dispatch with same mutation)
                </button>
                <button class="btn btn-success radius-2" @click="logCurrentRoute">Console Log current route</button>
            </fixed>

        </v-content>


    </v-app>
</template>

<script>
    import Navbar from "../components/Navbar"
    import Fixed from "../components/Fixed"

    export default {
        // COMPONENT NAME
        name: "App",

        // USED COMPONENTS
        components: {
            Navbar,
            Fixed
        },

        // PROPERTIES
        props: {

            title: {
                type: String,
                default: 'BrandX'
            }

        },

        // INITIAL STATE (DOESN'T SYNCHRONIZE WITH STORE)
        data() {

            return {
                show: true,
                description: this.$store.state.title
            }

        },

        // ACTIONS WHEN COMPONENT CREATED
        created() {

            // LISTEN FOR EVENTS
            eventBus.$on('sampleEvent', (data) => alert('EVENT RECEIVED: ' + data))

        },

        // CLEAR MEMORY BEFORE DESTROY
        beforeDestroy() {
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

            changeTitle() {
                this.$store.dispatch('changeTitle', 'Changed!')
            },

            clearTitle() {
                this.$store.dispatch('clearTitle')
            },

            logCurrentRoute() {
                console.log(this.$route)
            }

        }
    };
</script>

<style lang="scss">
@import '../../sass/animate';

.page-wrapper {
    animation-duration: 0.35s;
}

button {
    outline: none !important;
}

</style>
