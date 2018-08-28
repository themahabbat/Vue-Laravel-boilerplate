<template>
    <v-layout row wrap align-center justify-center>

        <v-flex xs10 lg3 :class="{ faded: isLoading }">
            <v-card class="elevation-6">

                <v-card-text>
                    <v-flex xs12>
                        <h3 class="margin-bottom-20">Register</h3>
                    </v-flex>

                    <v-form>

                        <v-text-field prepend-icon="person" v-model="name" label="Full name"
                                      type="email">
                        </v-text-field>
                        <transition enter-active-class="animated fadeIn"
                                    leave-active-class="animated fadeOut">
                            <v-alert outline="true" v-if="errors.name" :value="true" type="info">{{ errors.name }}
                            </v-alert>
                        </transition>


                        <v-text-field prepend-icon="email" v-model="email" label="Email" type="text"></v-text-field>
                        <transition enter-active-class="animated fadeIn"
                                    leave-active-class="animated fadeOut">
                            <v-alert outline="true" v-if="errors.email" :value="true" type="info">{{ errors.email }}
                            </v-alert>
                        </transition>

                        <v-text-field id="password" prepend-icon="lock" v-model="password" label="Password"
                                      type="password"></v-text-field>
                        <transition enter-active-class="animated fadeIn"
                                    leave-active-class="animated fadeOut">
                            <v-alert outline="true" v-if="errors.password" :value="true" type="info">{{ errors.password
                                }}
                            </v-alert>
                        </transition>
                    </v-form>

                    <v-flex xs12 lg12 text-center>
                        <v-btn color="info" @click="register">Register</v-btn>
                    </v-flex>
                </v-card-text>

            </v-card>
        </v-flex>

        <Spinner v-if="isLoading"/>

    </v-layout>
</template>

<script>
    import Spinner from "../components/Spinner"

    export default {
        name: 'Register',

        components: {
            Spinner
        },

        data() {

            return {
                isLoading: false,

                errors: {
                    name: '',
                    email: '',
                    password: ''
                },

                name: '',
                email: '',
                password: ''
            }

        },

        methods: {

            register() {
                this.isLoading = true

                let _this = this
                this.$store.dispatch('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }).then(res => {
                    this.isLoading = false
                    this.$router.push({name: 'home'})
                }).catch(error => {
                    this.isLoading = false

                    if (error.errors.hasOwnProperty('name')) this.errors.name = error.errors.name[0]
                    if (error.errors.hasOwnProperty('email')) this.errors.email = error.errors.email[0]
                    if (error.errors.hasOwnProperty('password')) this.errors.password = error.errors.password[0]

                    setTimeout(() => {
                        Object.keys(this.errors).forEach((key) => this.errors[key] = '')
                    }, 3 * 1000)

                })
            }

        }

    }
</script>

<style lang="scss" scoped>

    .register {
        width: 40%;
    }

    .v-alert {
        padding: 0 !important;
        border:0 !important;
        margin-top: -14px;

        &:not(:last-child) {
            margin-bottom: 2.5em;
        }
    }

</style>
