<template>
    <div>
        <SearchBar v-on:updateItems="updateItems"/>
        <div class="search-results">
            <SearchItem v-bind:key ="ticker.symbol" v-for="ticker in tickers" v-bind:stock="ticker"/>
        </div>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import SearchItem from '../components/SearchItem'
import {mapGetters} from 'vuex'
export default {
    name: 'Search',
    data(){
        return{
            tickers: []
        }
    },
    components: {
        SearchBar,
        SearchItem
    },
    methods:{
        filterTickers(key){
            this.tickers = this.getTickers.filter(ticker=>ticker.symbol.includes(key)||ticker.description.includes(key))
        },
        updateItems(key){
            this.filterTickers(key)
        }
    },
    computed: mapGetters(['getTickers', 'getPortfolio']),
}
</script>

<style scoped>
    .search-results{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 5%;
    }
</style>