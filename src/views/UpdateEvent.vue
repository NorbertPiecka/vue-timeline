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
            <input type="file" id="file" ref="myFile" class="form-control" @change="uploadFile" >

            <button class="btn btn-lg btn-info m-2" v-on:click="updateEvent(event.id)">Submit</button>

            <div id="preview">
                <img v-if="image" :src="image" width="400"/>
                <img v-else :src="event.image" width="400"/>
            </div>
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
            image: ''
        };
    },
    methods: {
        updateEvent: function (id) {
            var data = JSON.parse(window.localStorage.getItem('events'));
            var categories = JSON.parse(window.localStorage.getItem('categories'));
            var ev = data.find(e => e.id === parseInt(id));
            var modifiedEvent = {};
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
            if(!this.image || this.image.length < 3){
                this.image = ev.image;
            }

            if(isValid){
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
                this.$router.push('/home/table').then(()=> { this.$router.go() });
            }
        },
        uploadFile: function (file) {
            const fileData = file.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(fileData);
            reader.onload = (ev) => { this.image = ev.target.result };
        }
    },
    components: {
        MainHeader, MainFooter
    }
}
</script>

<style>

</style>