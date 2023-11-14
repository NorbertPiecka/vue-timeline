<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h1 class="text-white bg-dark bg-opacity-50">Create event</h1>
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
                <option v-for="category in categories" :key="category.name" :value="`${category.name}`">{{ category.name }}</option>
            </select>

            <label for="image">Image path</label>
            <input type="text" class="form-control" v-model="image" >

            <button class="btn btn-lg btn-info m-2" v-on:click="addEvent()">Submit</button>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'AddEvent',
    data() {
        var categories = JSON.parse(window.localStorage.getItem('categories'));
        return {
            categories: categories,
            name: '',
            category: '',
            description: '',
            start_date: '1939-09-01',
            end_date: '1939-09-01',
            image: ''
        };
    },
    methods: {
        addEvent: function () {
            var data = JSON.parse(window.localStorage.getItem('events'));
            var categories = JSON.parse(window.localStorage.getItem('categories'));
            var newEvent = {};
            var id = parseInt(window.localStorage.getItem('index')) + 1;
            var isValid = true;

            if(!this.name || this.name.length<3){
                alert('Wrong event name! At least 3 characters!');
                isValid = false;
            }
            if(!this.start_date || this.start_date < '1939-09-01' || this.start_date > '1945-09-02'){
                alert('Wrong Start Date!');
                isValid = false;
            }
            if(!this.end_date || this.end_date < '1939-09-01' || this.end_date > '1945-09-02'){
                alert('Wrong End Date!');
                isValid = false;
            }
            if(this.start_date > this.end_date){
                alert('Start Sate can\'t be smaller than End Date!');
                isValid = false;
            }
            if(!this.description || this.description.length < 3){
                alert('Description in too short!');
                isValid = false;
            }
            if(!this.category){
                alert('Category hasn\'t been choosen!');
                isValid = false;
            }

            if(isValid){
                newEvent['id'] = id;
                newEvent['name'] = this.name;
                newEvent['start_date'] = this.start_date;
                newEvent['end_date'] = this.end_date;
                newEvent['description'] = this.description;
                newEvent['category_name'] = this.category;
                newEvent['category_color'] = categories.find(c => c.name === this.category).color;
                newEvent['image'] = this.image;
                data.push(newEvent);
                window.localStorage.setItem('events', JSON.stringify(data));
                window.localStorage.setItem('index', id);
                this.$router.push('/home/table').then(()=> { this.$router.go() });
            }
        }
    },
    components: {
        MainHeader, MainFooter
    }
}
</script>

<style>

</style>