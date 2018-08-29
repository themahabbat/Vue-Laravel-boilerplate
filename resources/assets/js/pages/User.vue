<template>
    <div class="content text-center">

        <h4 class="margin-top-25">
            ID: {{ id }}
        </h4>

    </div>
</template>

<script>
    export default {
        name: 'User',

        props: ['id']
    }
</script>
