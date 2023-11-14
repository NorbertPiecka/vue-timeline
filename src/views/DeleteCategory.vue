<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <div class="bg-dark bg-opacity-50">
            <h1 class="text-white">Are you really want to remove category "<span style="color: #D1642E">{{ category.name }}</span>"?</h1>
            <h2 class="text-white">You will also delete events: </h2>
            <h3 v-for="event in events"  :key="event.id" class="text-red">{{ event.name }}</h3>
        </div>
        <div>
            <div class="form-group">
                <button class="btn btn-lg btn-danger m-2" v-on:click="deleteCategory(category.name)">YES</button>
                <a class="btn btn-lg btn-info m-2" href="/check/categories">NO</a>
            </div>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'DeleteCategory',
    props: ["name"],
    data() {
        var name = this.$route.params.name;
        var data = JSON.parse(window.localStorage.getItem('categories'));
        var events = JSON.parse(window.localStorage.getItem('events'));
        var category_events = [];

        for(let event of events){
            if(event.category_name === name){
                category_events.push(event);
            }
        }

        var category = data.find(c => c.name === name);
        if(!category) {
            category = { "name": "error", "color": "000000"}
        }
        return {
            category: category,
            events: category_events,
            category_name: category.name,
            color: category.color
        };
    },
    methods: {
        deleteCategory: function (name) {
            var data = JSON.parse(window.localStorage.getItem('categories'));
            var events = JSON.parse(window.localStorage.getItem('events'));
            var new_events = [];
            for(let [i, category] of data.entries()){
                if(category.name === name){
                    data.splice(i,1);
                }
            }
            for(let event of events){
                if(event.category_name != name){
                    new_events.push(event);
                }
            }
            window.localStorage.setItem('events', JSON.stringify(new_events));
            window.localStorage.setItem('categories', JSON.stringify(data));
            window.location.href = "/check/categories";
        }
    },
    components: {
        MainHeader, MainFooter
    }
}
</script>