<template>
  <div>
      <form @submit="searchForStock">
          <input v-model ="stock" type="text" name ="stock" placeholder="Search for a stock" autocomplete="off">
          <input type ="submit" class ="btn" value="Search" :disabled="!stock">
      </form>
  </div>
</template>

<script>
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
            this.$emit('updateItems',this.stock.toUpperCase())
        }
    }
}
</script>

<style>

</style>