<template>
    <MainHeader />
    <TimelineComponent :events="events" :categories="categories" :choosen="cat" />
    <MainFooter />
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';


export default {
    name: "TimelineHome",
    props: ["cat_name"],
    data () {
        var cat = this.$route.params.cat_name;
        var events = JSON.parse(window.localStorage.getItem('events'));
        if(cat && cat != 'all'){
            var new_events = [];
            for(let event of events){
                if(event.category_name === cat){
                    new_events.push(event);
                }
            }
            events = new_events;
        }
        events.sort(function(a,b) { return (new Date(a.start_date).getTime() - new Date(b.start_date).getTime()) || (new Date(a.end_date).getTime() - new Date(b.end_date).getTime())});
        var categories = JSON.parse(window.localStorage.getItem('categories'));
        return {
            events: events,
            categories: categories,
            cat: cat
        }
    },
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