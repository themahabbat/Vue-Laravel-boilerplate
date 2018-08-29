<template>
    <v-layout row wrap align-center justify-center class="page-wrapper">

        <v-flex xs10 lg4 :class="{ faded: isLoading }">
            <v-card class="elevation-12">

                <v-card-text>
                    <v-flex xs12>
                        <h3 class="margin-bottom-20">Register</h3>
                    </v-flex>

                    <v-flex xs12>
                        <transition enter-active-class="animated fadeIn"
                                    leave-active-class="animated fadeOut">
                            <v-alert v-if="serverErrors" :value="true" type="error">
                                <ul class="standart">
                                    <li v-for="(value, key) in serverErrors" :key="key">
                                        {{ value[0] }}
                                    </li>
                                </ul>
                            </v-alert>
                        </transition>
                    </v-flex>

                    <v-form>

                        <v-text-field
                                prepend-icon="person"
                                name="name" v-model="name"
                                label="Full name"
                                type="text"
                                :class="{ hasError: errors.has('name') }"
                                :rules="( errors.has('name')) ? [errors.first('name')] : [true]"
                                :error-messages="errors.has('name') ? [errors.first('name')] : []"
                                v-validate="'required'"
                                v-on:keyup.enter="register"
                                clearable
                                solo>
                        </v-text-field>


                        <v-text-field
                                prepend-icon="email"
                                name="email"
                                v-model="email"
                                label="Email"
                                type="text"
                                :rules="( errors.has('email')) ? [errors.first('email')] : [true]"
                                :error-messages="errors.has('email') ? [errors.first('email')] : []"
                                v-validate="'required|email'"
                                v-on:keyup.enter="register"
                                clearable
                                persistentHint
                                solo></v-text-field>

                        <v-text-field
                                prepend-icon="lock"
                                :append-icon="showPasswords ? 'visibility_off' : 'visibility'"
                                name="password"
                                v-model="password"
                                label="Password"
                                :rules="( errors.has('password')) ? [errors.first('password')] : [true]"
                                :error-messages="errors.has('password') ? [errors.first('password')] : []"
                                :type="showPasswords ? 'text' : 'password'"
                                v-validate="'required|min:6'"
                                v-on:keyup.enter="register"
                                clearable
                                solo
                                @click:append="showPasswords = !showPasswords"></v-text-field>
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

        created(){
            this.$toast('f','x', 'success')
        },

        data() {

            return {
                isLoading: false,
                showPasswords: false,

                serverErrors: '',

                name: '',
                email: '',
                password: ''
            }

        },

        methods: {

            register() {
                this.$validator.validateAll().then((valid) => {

                    if (valid) {
                        this.isLoading = true

                        this.$store.dispatch('register', {
                            name: this.name,
                            email: this.email,
                            password: this.password
                        }).then(res => {
                            this.isLoading = false
                            this.$router.push({name: 'home'})
                        }).catch(error => {
                            this.isLoading = false

                            this.serverErrors = Object.values(error.errors)

                            setTimeout(() => {
                                this.serverErrors = null
                            }, 3 * 1000)

                        })
                    }

                })
            }//register

        }//methods

    }
</script>

<style lang="scss" scoped>

    .register {
        width: 40%;
    }

    .v-alert {
        border-radius: 4px;
        padding: 0 1em !important;
        margin-bottom: 2.5em;
    }

    ul {
        padding: 1em;
    }

</style>
