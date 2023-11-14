<template>
    <MainHeader />
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h4 class="p-2 text-white bg-dark bg-opacity-50">Categories</h4>
        <div>
            <router-link class="p-2 btn btn-info m-2 text-white" to="/add/category">Add Category</router-link>
            <router-link class="p-2 btn btn-warning m-2 text-white" to="/home/table">Go back</router-link>
        </div>
        <v-data-table :items="categories" :headers="headers" :sort-by="sortBy" class="table table-light table-striped">
            <template #[`item.color`]="{item}">
                <div :style="{'color': item.color}">&#9632;</div>
            </template>
            <template #[`item.actions`]="{item}">
                <div>
                    <router-link class="btn btn-outline-info m-1 p-1" :to="{ name: 'UpdateCategory', params: { name: item.name } }">EDIT</router-link>
                    <router-link class="btn btn-outline-danger m-1 p-1" :to="{ name: 'DeleteCategory', params: { name: item.name } }">DELETE</router-link>
                </div>
            </template>
        </v-data-table>
    </div>
    <MainFooter />
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';

var data = JSON.parse(window.localStorage.getItem('categories'));
var headers = [
    {title: 'Name', key: 'name'},
    {title: 'Color', key: 'color'},
    {title: 'Actions', key: 'actions', sortable: false, width: '1%'}
]

export default {
    name: "CheckCategories",
    data() {
        return {
            categories: data,
            headers: headers,
            sortBy: [{key: 'name'}]
        };
    },
    components: { MainHeader, MainFooter }
}

</script>

<style>
td:hover {
    background-color: #d9cba7;
}
tr:nth-child(even) {
    background-color: #bdb5a2;
    border: 1px solid black;
}
tr:nth-child(odd) {
    background-color: #ada797;
    border: 1px solid black;
}
td{
    border: 1px solid black;
}
th{
    background-color: #fff8dc;
    border: 1px solid #a09465;
}
</style>