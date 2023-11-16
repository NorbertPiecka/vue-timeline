<template>
    
    <div class="container d-flex flex-row align-items-center justify-content-evenly text-white bg-dark bg-opacity-50">
        <label for="category">Event Category</label>
        <p></p>
        <select class="form-select form-select-sm" v-model="choosen_category" aria-label="category-select" :on-change="filterEvents(choosen_category)" events.sync="events">
            <option value="all">{{ stringToUpper('all') }}</option>
            <option v-for="category in categories" :key="category.name" :value="`${category.name}`" :style="{'color': category.color}">{{ stringToUpper(category.name) }}</option>
        </select>
    </div>
    <v-timeline align="start">
        <v-timeline-item v-for="event in events" :key="event.id" :dot-color="categories[getIndex(event.category_name)].color" fill-dot>
            <v-card class="own-card">
                <v-card-title :style="{'color': categories[getIndex(event.category_name)].color, 'background': `url('${event.image}')`}">
                    {{ event.name }}
                </v-card-title>
                <v-card-text class="p-3 own-card">
                    <p>{{ getTextShortcut(event.description) }}</p>
                </v-card-text>
                <v-btn :color="categories[getIndex(event.category_name)].color" variant="outlined" class="p-2 m-2" :href="`/check/event/${event.id}`">
                READ MORE
                </v-btn>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>
<script>

export default {
    name: "TimelineComponent",
    props: ['events','categories','choosen'],
    data () {
        return {
            choosen_category: ''
        }
    },
    methods: {
        stringToUpper: function(text){
            if(text){
                return text.toUpperCase();
            }
            return 'ALL';
        },
        filterEvents: function(category_name){
            if(category_name){
                var redirect_link = `/home/timeline/${category_name}`;
                this.$router.push(redirect_link).then(()=> { this.$router.go() });
            }
            if(category_name && category_name === 'all'){
                console.log(this.choosen_category);
            }
        },
        getIndex: function(name){
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
        getTextShortcut: function(text){
            if(text.length<200){
                return text;
            }
            return text.slice(0,200) + '...';
        }
    }
}

</script>

<style>
.own-cat {
    background-color: azure;
}

a {
    text-decoration: none;
    color: black;
}

a:hover{
    background: aliceblue;
}
.selected-option {
    background-color: beige;
}
.own-card{
    background-color: #B5AE77;
    height: 5%;
}
</style>