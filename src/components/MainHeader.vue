<template>
    <nav class="navbar navbar-expand-lg navbar-dark opacity-75 align-self-center">
        <div class="container d-flex align-items-center justify-content-center">
            <router-link class="p-2 bg-opacity-100 m-2 own-header" to="/home/timeline">T I M E L I N E</router-link>
            <router-link class="navbar-brand bg-opacity-50 p-3 m-1 main-header" to="/home/timeline">The World War 2 Timeline</router-link>
            <router-link class="p-2 bg-opacity-100 m-2 own-header" to="/home/table">T A B L E</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MainHeader'
    }
</script>

<style>
.own-header {
    background-color: rgb(31, 31, 31);
    color: white;
    text-decoration: none;
}
.own-header:hover {
    background-color: rgb(170, 163, 124);
    color: white;
}
.main-header {
    background-color: rgb(73, 71, 71);
    color: white;
    text-decoration: none;
}
.main-header:hover {
    background-color: rgb(167, 159, 202);
    color: white;
}
</style>