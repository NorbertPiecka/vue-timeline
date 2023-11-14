<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h1 class="text-white bg-dark bg-opacity-50">Create category</h1>
        <div class="text-white text-white">
            <label for="category_name">Category name</label>
            <input type="text" class="form-control" v-model="name">

            <label for="image">Color</label>
            <input type="color" class="form-control" v-model="color" >

            <button class="btn btn-lg btn-info m-2" v-on:click="addCategory()">Submit</button>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'AddCategory',
    data() {
        return {
            name: '',
            color: ''
        };
    },
    methods: {
        addCategory: function () {
            var data = JSON.parse(window.localStorage.getItem('categories'));
            var newCategory = {};
            newCategory['name'] = this.name;
            newCategory['color'] = this.color;
            data.push(newCategory);
            window.localStorage.setItem('categories', JSON.stringify(data));
            window.location.href = "/check/categories";
        }
    },
    components: {
        MainHeader, MainFooter
    }
}
</script>