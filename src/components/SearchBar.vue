<template>
  <div>
      <form @submit="searchForStock">
          <input v-model ="stock" type="text" name ="stock" placeholder="Search for a stock">
          <input type ="submit" class ="btn" value="Search">
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SearchBar",
    data(){
        return {
            stock: '',
        }
    },
    methods:{
        searchForStock(e){
            e.preventDefault()
            axios.get('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+this.stock+'&apikey='+process.env.API_KEY).then(
                res=>this.$emit('search-result', res.data.bestMatches)
            ).catch(
                err=>console.log(err)
            )
        }
    }
}
</script>

<style>

</style>