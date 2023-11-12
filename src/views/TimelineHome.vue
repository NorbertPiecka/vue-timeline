<template>
    <MainHeader />
    <TimelineComponent />
    <MainFooter />
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';


export default {
    name: "TimelineHome",
    components: { MainHeader, TimelineComponent, MainFooter }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

body {
  background: url('..\\assets\\background.jpg') repeat center fixed !important;
  background-size: cover;
}

footer {
      position: fixed;
      bottom: 0;
      width: 100%;
  }
</style>