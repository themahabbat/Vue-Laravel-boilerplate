<template>
    <v-layout row wrap align-center justify-center class="page-wrapper">

        <v-flex xs10 lg4 :class="{ faded: isLoading }">
            <v-card class="elevation-12">

                <v-card-text>
                    <v-flex xs12>
                        <h3 class="margin-bottom-20">Login</h3>
                    </v-flex>

                    <v-flex xs12>
                        <transition enter-active-class="animated fadeIn"
                                    leave-active-class="animated fadeOut">
                            <v-alert v-if="serverError" :value="true" type="error">
                                {{ serverError }}
                            </v-alert>
                        </transition>
                    </v-flex>

                    <v-form>

                        <v-text-field
                                prepend-icon="email"
                                name="email"
                                v-model="email"
                                label="Email"
                                type="text"
                                :rules="( errors.has('email')) ? [errors.first('email')] : [true]"
                                :error-messages="errors.has('email') ? [errors.first('email')] : []"
                                v-validate="'required|email'"
                                v-on:keyup.enter="login"
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
                                v-on:keyup.enter="login"
                                clearable
                                solo
                                @click:append="showPasswords = !showPasswords"></v-text-field>
                    </v-form>

                    <v-flex xs12 lg12 text-center>
                        <v-btn color="info" :disabled="isLoading" @click="login">Login</v-btn>
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
        name: 'Login',

        components: { 
            Spinner
         },

        data() {

            return {
                isLoading: false,
                showPasswords: false,
                serverError: '',

                email: '',
                password: ''
            }

        },

        methods: {

            login() {
                this.$validator.validateAll().then((valid) => {

                    if (valid) {
                        this.isLoading = true

                        this.$store.dispatch('login', {
                            email: this.email,
                            password: this.password
                        }).then(res => {
                            this.isLoading = false
                            this.$router.push({name: 'home'})
                        }).catch(error => {
                            this.isLoading = false

                            this.serverError = error.message

                            console.log(error)

                            setTimeout(() => {
                                this.serverError = null
                            }, 3 * 1000)

                        })
                    }

                })
            }//login

        }

    }
</script>

<style lang="scss" scoped>

    .login {
    }

</style>
