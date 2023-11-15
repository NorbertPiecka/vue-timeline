<template>
    
    <div class="container d-flex flex-row align-items-center justify-content-evenly text-white bg-dark bg-opacity-50">
        <label for="category">Event Category</label>
        <p></p>
        <select class="form-select form-select-sm" v-model="choosen_category" aria-label="category-select" :on-change="filterEvents(choosen_category)" events.sync="events">
            <option class="selected-option" selected :value="`${choosen_category}`">{{ stringToUpper(choosen) }}</option>
            <option value="ALL">{{ stringToUpper('all') }}</option>
            <option v-for="category in categories" :key="category.name" :value="`${category.name}`" :style="{'color': category.color}">{{ stringToUpper(category.name) }}</option>
        </select>
    </div>
    <p v-for="event in events" :key="event.id">{{event.name}}</p>
</template>
<script>

export default {
    name: "TimelineComponent",
    props: ['events','categories','choosen'],
    data () {
        return {
            choosen_category: 'all'
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
            if(category_name && category_name!='all'){
                var redirect_link = `/home/timeline/${category_name}`;
                this.$router.push(redirect_link).then(()=> { this.$router.go() });
            }
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
</style>