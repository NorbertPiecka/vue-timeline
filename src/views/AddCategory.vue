<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h1 class="text-white bg-dark bg-opacity-50">Create category</h1>
        <div class="text-white d-flex flex-column align-items-center justify-content-center">
            <label for="category_name">Category name</label>
            <input type="text" class="form-control" v-model="name">

            <label for="image">Color</label>
            <input type="color" class="form-control form-control-color" v-model="color" >

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
            var isValid = true;

            if(!this.name || this.name.length < 3){
                alert('Category name too short!');
                isValid = false;
            }

            var categoryFinding = data.find(c => c.name === this.name);
            if(categoryFinding){
                alert('Category name already exists!');
                isValid = false;
            }

            if(isValid){
                newCategory['name'] = this.name;
                newCategory['color'] = this.color;
                data.push(newCategory);
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