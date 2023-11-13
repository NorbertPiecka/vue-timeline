<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <div class="bg-dark bg-opacity-50">
            <h1 class="text-white" >{{ event.name }}</h1>
            <h5 class="date-h text-white" v-if="event.start_date === event.end_date">{{ event.start_date }}</h5>
            <h5 class="date-h text-white" v-else>{{ event.start_date }} - {{ event.end_date }}</h5>
            <p class="detail-description text-white">{{ event.description }}</p>
        </div>
        <img :src="`${ event.image }`" width="900" :alt="`${ event.image }`">
    </div>
    <MainFooter />
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';
import ErrorEvent from '@/data/error'
export default {
    name: "CheckEvent",
    props: ['id'],
    data() {
        var id = this.$route.params.id;
        var data = JSON.parse(window.localStorage.getItem('events'));
        var event = data.find(e => e.id === parseInt(id));
        if(!event) {
            event = JSON.stringify(ErrorEvent);
        }
        return {
            event: event
        };
    },
    components: { MainHeader, MainFooter }
}

</script>

<style>
.detail-description {
    font-size: 22px;
}
</style>