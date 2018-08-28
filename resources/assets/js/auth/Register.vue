<template>
    <v-layout row wrap align-center justify-center>

        <v-flex xs10 lg4 :class="{ faded: isLoading }">
            <v-card class="elevation-12">

                <v-card-text>
                    <v-flex xs12>
                        <h3 class="margin-bottom-20">Register</h3>
                    </v-flex>

                    <v-flex xs12>
                        <transition enter-active-class="animated fadeIn"
                                    leave-active-class="animated fadeOut">
                            <v-alert v-if="apiErrors" :value="true" type="error">
                                <ul class="standart">
                                    <li v-for="(value, key) in apiErrors" :key="key">
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
                                :rules="( errors.first('name')) ? [errors.first('name')] : [true]"
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
                                :rules="( errors.first('email')) ? [errors.first('email')] : [true]"
                                v-validate="'required|email'"
                                v-on:keyup.enter="register"
                                clearable
                                solo></v-text-field>

                        <v-text-field
                                prepend-icon="lock"
                                :append-icon="showPasswords ? 'visibility_off' : 'visibility'"
                                name="password"
                                v-model="password"
                                label="Password"
                                :rules="( errors.first('password')) ? [errors.first('password')] : [true]"
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

        data() {

            return {
                isLoading: false,
                showPasswords: false,

                apiErrors: '',

                name: '',
                email: '',
                password: ''
            }

        },

        methods: {

            register() {
                this.$validator.validateAll().then((result) => {

                    console.log(result)


                })

                return;

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

                    this.apiErrors = Object.values(error.errors)

                    // setTimeout(() => {
                    //     Object.keys(this.errors).forEach((key) => this.errors[key] = '')
                    // }, 3 * 1000)

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
        border-radius: 4px;
        padding: 0 1em !important;
        margin-bottom: 2.5em;
    }

    ul {
        padding: 1em;
    }

</style>
