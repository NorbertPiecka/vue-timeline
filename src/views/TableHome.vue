<template>
    <MainHeader />
    <TableComponent />
    <MainFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import TableComponent from '@/components/TableComponent.vue'

export default {
    name: "TableHome",
    components: {
    MainHeader,
    MainFooter,
    TableComponent
},
    data() {
      return {}
    }
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