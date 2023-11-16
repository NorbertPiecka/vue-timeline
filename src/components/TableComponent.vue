<template>
    <hr>
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <h4 class="p-2 text-white bg-dark bg-opacity-50">Events</h4>
        <div>
            <router-link class="p-2 btn btn-success m-2 text-white" to="/add/event">Add New Event</router-link>
            <router-link class="p-2 btn btn-info m-2 text-white" to="/check/categories">See categories</router-link>
        </div>
    </div>
    <hr>
    <div class="container d-flex flex-column align-items-center justify-content-center p-2 ">
        <h6 class="p-2 text-white bg-dark bg-opacity-50">Filter Start Date of Events</h6>
        <div class="row text-white m-1">
            <label class="col">From: </label>
            <input type="text" class="form-control col" v-model="f_start_date" onfocus="(this.type='date')" onblur="(this.type='text')">
        </div>
        <div class="row text-white m-1">
            <p class="col"> To: </p>
            <input type="text" class="form-control col" v-model="f_end_date" onfocus="(this.type='date')" onblur="(this.type='text')">
        </div>
        <button class="btn btn-sm btn-info col m-2" v-on:click="filterEvents()">Filter</button>
    </div>
    <div class="container d-flex flex-column align-items-center justify-content-center">
        <v-data-table :items="events" :headers="headers" :sort-by="sortBy" class="table table-light table-striped">
            <template #[`item.category_color`]="{item}">
                <div :style="{'color': categories[getIndex(item.category_name)].color}">&#9632;</div>
            </template>
            <template #[`item.image`]="{item}">
                <img :src="`${ item.image }`" width="200" :alt="`${ item.image }`">
            </template>
            <template #[`item.actions`]="{item}">
                <div>
                    <router-link class="btn btn-outline-secondary m-1 p-1" :to="{ name: 'CheckEvent', params: { id: item.id } }">SEE</router-link>
                    <router-link class="btn btn-outline-info m-1 p-1" :to="{ name: 'UpdateEvent', params: { id: item.id } }">EDIT</router-link>
                    <router-link class="btn btn-outline-danger m-1 p-1" :to="{ name: 'DeleteEvent', params: { id: item.id } }">DELETE</router-link>
                </div>
            </template>
        </v-data-table>
    </div>
</template>

<script>
var data = JSON.parse(window.localStorage.getItem('events'));
var categories = JSON.parse(window.localStorage.getItem('categories'));
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
            categories: categories,
            headers: headers,
            sortBy: [{key: 'id'}],
            f_start_date: '1939-09-01',
            f_end_date: '1945-09-02'
        }
    },
    methods: {
        getIndex: function(name) {
            var data = JSON.parse(window.localStorage.getItem('categories'));
            var index = -1;
            data.find(function(item, i){
                if(item.name === name){
                    index = i;
                    return i;
                }
            });
            return index;
        },
        filterEvents: function() {
            var data = JSON.parse(window.localStorage.getItem('events'));
            var newEvents = [];
            var start_time = new Date(this.f_start_date).getTime();
            var end_time = new Date(this.f_end_date).getTime();
            var isFilterValid = true;

            if(start_time < new Date('1939-09-01') || start_time > new Date('1945-09-02')){
                isFilterValid = false;
            }
            if(end_time < new Date('1939-09-01') || end_time > new Date('1945-09-02')){
                isFilterValid = false;
            }
            if(start_time > end_time){
                isFilterValid = false;
            }

            if(isFilterValid){
                for(let e of data){
                    var event_date = new Date(e.start_date).getTime();
                    if(event_date>=start_time && event_date <=end_time){
                        newEvents.push(e);
                    }
                }
                newEvents.sort(function(a,b) { return (new Date(a.start_date).getTime() - new Date(b.start_date).getTime()) || (new Date(a.end_date).getTime() - new Date(b.end_date).getTime())});
                this.events = newEvents;
            } else {
                alert('Provided dates are not valid!');
            }
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
.own-filter {
    background-color: rgb(31, 31, 31);
    color: white;
    text-decoration: none;
}
.own-filter:hover {
    background-color: rgb(170, 163, 124);
    color: white;
}
</style>