<template>
    <div>
        <SearchBar v-on:search-result="updateItems"/>
        <div v-bind:key ="item['1. symbol']" v-for="item in items">
            <SearchItem v-bind:data="item"/>
        </div>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import SearchItem from '../components/SearchItem'
export default {
    name: 'Search',
    components: {
        SearchBar,
        SearchItem
    },
    methods:{
        updateItems(items){
            this.items = items
        }
    },
    data(){
        return {
            items:[]
        }
    }
}
</script>

<style>

</style>