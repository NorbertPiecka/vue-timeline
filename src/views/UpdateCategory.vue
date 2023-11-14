<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h1 class="text-white bg-dark bg-opacity-50">Update category</h1>
        <div class="text-white">
            <label for="category_name">Category name</label>
            <input type="text" class="form-control" v-model="category_name">

            <label for="image">Color</label>
            <input type="color" class="form-control" v-model="color" >

            <button class="btn btn-lg btn-info m-2" v-on:click="updateCategory(category.name)">Submit</button>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'UpdateCategory',
    props: ["name"],
    data() {
        var name = this.$route.params.name;
        var data = JSON.parse(window.localStorage.getItem('categories'));
        var category = data.find(c => c.name === name);
        if(!category) {
            category = { "name": "error", "color": "000000"}
        }
        return {
            category: category,
            category_name: category.name,
            color: category.color
        };
    },
    methods: {
        updateCategory: function (name) {
            var data = JSON.parse(window.localStorage.getItem('categories'));
            var events = JSON.parse(window.localStorage.getItem('events'));
            var new_events = [];
            var newCategory = {};
            var isValid = true;

            if(!this.category_name || this.category_name.length < 3){
                alert('Category name too short!');
                isValid = false;
            }
            
            if(isValid) {
                for(let [i, category] of data.entries()){
                    if(category.name === name){
                        data.splice(i,1);
                    }
                }
                for(let event of events){
                    if(event.category_name === name){
                        event['category_name'] = this.category_name;
                    }
                    new_events.push(event);
                }
                newCategory['name'] = this.category_name;
                newCategory['color'] = this.color;
                data.push(newCategory);
                window.localStorage.setItem('events', JSON.stringify(new_events));
                window.localStorage.setItem('categories', JSON.stringify(data));
                this.$router.push('/check/categories').then(()=> { this.$router.go() });
            }
        }
    },
    components: {
        MainHeader, MainFooter
    }
}
</script>