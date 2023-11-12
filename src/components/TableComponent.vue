<template>
    <hr>
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h4 class="p-2">Events</h4>
        <a class="p-2 btn btn-success m-2" href="#">Add New Event</a>
    </div>
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <v-data-table :items="events" :headers="headers" class="table table-hover">
            <template #[`item.category_color`]="{item}">
                <div :style="{'color':item.category_color}">&#9632;</div>
            </template>
            <template #[`item.image`]="{item}">
                <img :src="`${ item.image }`" width="200" :alt="`${ item.image }`">
            </template>
            <template #[`item.actions`]="{item}">
                <div>
                    <router-link class="btn btn-outline-danger m-1 p-1" :to="`/delete/event/${ item.id }`">DELETE</router-link>
                    <router-link class="btn btn-outline-info m-1 p-1" :to="`/update/event/${ item.id }`">UPDATE</router-link>
                    <router-link class="btn btn-outline-secondary m-1 p-1" :to="`/check/event/${ item.id }`">CHECK</router-link>
                </div>
            </template>
        </v-data-table>
        <hr><hr>
    </div>
</template>

<script>
var data = JSON.parse(window.localStorage.getItem('events'));
var headers = [
    {title: 'ID', key: 'id'},
    {title: 'Name', key: 'name'},
    {title: 'Description', key: 'description', width: '100', sortable: false},
    {title: 'Category name', key: 'category_name'},
    {title: 'Category color', key: 'category_color'},
    {title: 'Start Date', key: 'start_date'},
    {title: 'End Date', key: 'end_date'},
    {title: 'Image', key: 'image', sortable: false},
    {title: 'Actions', key: 'actions', sortable: false}
]
console.log(data);

export default {
    name: "TableComponent",
    data () {
        return {
            events: data,
            headers: headers
        }
    }
}

</script>