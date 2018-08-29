<template>
    <v-layout row wrap align-center justify-center class="page-wrapper">

        <v-flex text-center xs10 lg5>

            <v-alert :value="true" type="error">
                <h3>Oops..!</h3>
                <v-divider></v-divider>
                <h2>404 Error. Page not found</h2>
            </v-alert>

        </v-flex>

    </v-layout>
</template>

<script>
    export default {
        name: "NotFound404"
    }
</script>

<style scoped>

</style>