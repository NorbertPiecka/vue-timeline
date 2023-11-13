<template>
    <hr>
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h4 class="p-2">Events</h4>
        <a class="p-2 btn btn-success m-2" href="#">Add New Event</a>
    </div>
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <v-data-table :items="events" :headers="headers" class="table table-light table-striped">
            <template #[`item.category_color`]="{item}">
                <div :style="{'color':item.category_color}">&#9632;</div>
            </template>
            <template #[`item.image`]="{item}">
                <img :src="`${ item.image }`" width="200" :alt="`${ item.image }`">
            </template>
            <template #[`item.actions`]="{item}">
                <div>
                    <router-link class="btn btn-outline-danger m-1 p-1" :to="{ name: 'DeleteEvent', params: { id: item.id } }">DELETE</router-link>
                    <router-link class="btn btn-outline-info m-1 p-1" :to="`/update/event/${ item.id }`">UPDATE</router-link>
                    <router-link class="btn btn-outline-secondary m-1 p-1" :to="{ name: 'CheckEvent', params: { id: item.id } }">CHECK</router-link>
                </div>
            </template>
        </v-data-table>
    </div>
</template>

<script>
var data = JSON.parse(window.localStorage.getItem('events'));
var headers = [
    {title: 'ID', key: 'id', width: '1%'},
    {title: 'Name', key: 'name', width: '1%'},
    {title: 'Description', key: 'description', sortable: false},
    {title: 'Category name', key: 'category_name', width: '1%'},
    {title: 'Category color', key: 'category_color', width: '1%'},
    {title: 'Start Date', key: 'start_date', width: '1%'},
    {title: 'End Date', key: 'end_date', width: '1%'},
    {title: 'Image', key: 'image', sortable: false, width: '1%'},
    {title: 'Actions', key: 'actions', sortable: false, width: '1%'}
]

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

<style>
td:hover {
    background-color: #d9cba7;
}
tr:nth-child(even) {
    background-color: #bdb5a2;
}
tr:nth-child(odd) {
    background-color: #ada797;
}
</style>