<template>
    <nav class="navbar navbar-expand-lg navbar-dark opacity-75 align-self-center">
        <div class="container d-flex align-items-center justify-content-center">
            <router-link class="btn btn-warning aria-disabled='true' p-2 m-2" to="/home/timeline">Timeline</router-link>
            <router-link class="navbar-brand bg-dark bg-opacity-50 p-3 m-1" to="/home/timeline">The World War 2 Timeline</router-link>
            <router-link class="btn btn-success aria-disabled='true' p-2 m-2" to="/home/table">Table</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MainHeader'
    }
</script>

<style>

</style>