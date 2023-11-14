<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <div class="bg-dark bg-opacity-50">
            <h1 class="text-white">Are you really want to remove event "<span style="color: #D1642E">{{ event.name }}</span>"?</h1>
        </div>
        <div>
            <div class="form-group">
                <button class="btn btn-lg btn-danger m-2" v-on:click="deleteEvent(event.id)">YES</button>
                <router-link class="btn btn-lg btn-info m-2" to="/home/table">NO</router-link>
            </div>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';

export default {
    name: "DeleteEvent",
    props: ["id"],
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
    methods: {
        deleteEvent: function (id) {
            var data = JSON.parse(window.localStorage.getItem('events'));
            for(let [i, event] of data.entries()){
                if(event.id === parseInt(id)){
                    data.splice(i,1);
                }
            }
            window.localStorage.setItem('events', JSON.stringify(data));
            this.$router.push('/home/table').then(()=> { this.$router.go() });
        }
    },
    components: { MainHeader, MainFooter }
}
</script>

<style>

</style>