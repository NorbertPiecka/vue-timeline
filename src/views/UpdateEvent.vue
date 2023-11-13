<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h1 class="text-white bg-dark bg-opacity-50">Update Event - {{ event.name }}</h1>
        <div class="text-white">
            <label for="event_name">Event name</label>
            <input type="text" class="form-control" v-model="name">
                    
            <label for="start_date">Start date</label>
            <input type="text" class="form-control" v-model="start_date" onfocus="(this.type='date')" onblur="(this.type='text')">

            <label for="end_date">End date</label>
            <input type="text" class="form-control" v-model="end_date" onfocus="(this.type='date')" onblur="(this.type='text')">

            <label for="description">Event Description</label>
            <input type="textarea" class="form-control" v-model="description" >

            <label for="category">Event Category</label>
            <select class="form-select" v-model="category" aria-label="category-select">
                <option selected value="{{ event.category_name }}">{{ event.category_name }}</option>
                <option v-for="category in categories" :key="category.name" :value="`${category.name}`">{{ category.name }}</option>
            </select>

            <label for="image">Image path</label>
            <input type="text" class="form-control" v-model="image" >

            <button class="btn btn-lg btn-info m-2" v-on:click="updateEvent(event.id)">Submit</button>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'UpdateEvent',
    props: ["id"],
    data() {
        var id = this.$route.params.id;
        var data = JSON.parse(window.localStorage.getItem('events'));
        var categories = JSON.parse(window.localStorage.getItem('categories'));
        var event = data.find(e => e.id === parseInt(id));
        if(!event) {
            event = JSON.stringify(ErrorEvent);
        }
        return {
            event: event,
            categories: categories,
            name: event.name,
            category: event.category_name,
            description: event.description,
            start_date: event.start_date,
            end_date: event.end_date,
            image: event.image
        };
    },
    methods: {
        updateEvent: function (id) {
            var data = JSON.parse(window.localStorage.getItem('events'));
            var categories = JSON.parse(window.localStorage.getItem('categories'));
            var modifiedEvent = {};
            modifiedEvent['id'] = id;
            modifiedEvent['name'] = this.name;
            modifiedEvent['start_date'] = this.start_date;
            modifiedEvent['end_date'] = this.end_date;
            modifiedEvent['description'] = this.description;
            modifiedEvent['category_name'] = this.category;
            modifiedEvent['category_color'] = categories.find(c => c.name === this.category).color;
            modifiedEvent['image'] = this.image;
            for(let [i, event] of data.entries()){
                if(event.id === parseInt(id)){
                    data.splice(i,1);
                }
            }
            data.push(modifiedEvent);
            window.localStorage.setItem('events', JSON.stringify(data));
            window.location.href = "/home/timeline/";
        }
    },
    components: {
        MainHeader, MainFooter
    }
}
</script>

<style>

</style>