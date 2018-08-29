<template>

    <transition-group
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUp">

        <v-navigation-drawer
                class="hidden-md-and-up"
                key="drawer"
                v-model="drawer"
                fixed
                clipped
                app
        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img :src="user.img">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ user.name }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                        v-for="link in toolbar.main">
                    <v-list-tile-action class="drawer-icon">
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content class="cursor-pointer" @click="$router.push(link.route)">
                        <v-list-tile-title>{{ link.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
                v-if="show"
                class="elevation-0"
                key="toolbar"
                color="info"
                dark
                dense
                fixed
                clipped-left
                app
        >
            <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer;"></v-toolbar-side-icon>

            <v-toolbar-title>{{ title || $store.state.defaultTitle }}</v-toolbar-title>


            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="link in toolbar.main" @click="$router.push(link.route)" flat
                       v-if="link.if!=null ? link.if : true">
                    {{ link.title }}
                </v-btn>
            </v-toolbar-items>


            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="link in toolbar.right" @click="$router.push(link.route)" flat
                       v-if="link.if!=null ? link.if : true">
                    {{ link.title }}
                </v-btn>


            </v-toolbar-items>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-menu offset-y transition="slide-x-transition" origin="center center" class="hidden-md-and-up">
                <v-btn slot="activator" flat icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile
                            v-if="link.if"
                            v-for="(link) in toolbar.right" @click="$router.push(link.route)">
                        <v-list-tile-title>{{ link.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <h6 class="hidden-md-and-down">{{ description }} / {{ replacedTitle }}</h6>

        </v-toolbar>
    </transition-group>

</template>

<script>
    export default {
        name: "navbar",

        // PROPERTIES
        props: {

            // SHOW NAVBAR
            show: {
                type: Boolean,
                required: true
            },

            // NAVBAR TITLE
            title: {
                type: String,
                required: true
            }

        },

        // COMPONENT STATE
        data() {
            return {
                user: {
                    name: 'John Leider',
                    img: 'https://randomuser.me/api/portraits/men/85.jpg'
                },

                drawer: false,
                description: this.$store.state.title
            }
        },

        // COMPUTED DATA (SYNCHRONIZED DATA)
        computed: {

            // NAVIGATION LINKS
            toolbar() {
                return {

                    // LEFT SIDE
                    main: [
                        {
                            title: 'Home',
                            icon: 'home',
                            route: {name: 'home'}
                        },

                        {
                            title: 'About',
                            icon: 'info',
                            route: {name: 'about'}
                        },
                        {
                            title: 'Random user',
                            icon: 'sort',
                            route: {name: 'user', params: {id: this.id}}
                        }
                    ],

                    // RIGHT SIDE
                    right: [
                        {
                            title: 'Login',
                            route: {name: 'login'},
                            if: !this.auth
                        },
                        {
                            title: 'Register',
                            route: {name: 'register'},
                            if: !this.auth
                        },
                        {
                            title: 'Logout',
                            route: {name: 'logout'},
                            if: this.auth
                        },
                    ]

                }
            },

            // RANDOM ID FOR USER ROUTE
            id() {
                return Math.floor(Math.random() * 10)
            },

            // REPLACE TITLE TO SEE DIFFERENCE OF DATA AND COMPUTED
            replacedTitle() {
                return this.$store.getters.replacedTitle
            },

            // AUTHENTICATION STATE
            auth() {
                return this.$store.getters.auth
            }

        },
    }
</script>

<style lang="scss" scoped>
    // SCOPED MEANS FOR THIS COMPONENT ONLY, NOT GLOBAL

    a {

        &.toolbar-link {
            text-decoration: none;
            color: #fff;

            button {
                height: 100% !important;
            }

        }

        &.drawer-link {
            text-decoration: none !important;
            font-weight: 500 !important;
            font-family: Roboto !important;
            color: #080808 !important;
        }

    }

    .drawer-icon {
        min-width: 43px !important;
    }
</style>