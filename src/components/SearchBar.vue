<template>
  <div>
      <form @submit="searchForStock" class="search-bar">
          <input v-model ="stock" type="text" name ="stock" placeholder="Search for a stock" autocomplete="off" class="txt-inpt">
          <button type ="submit" class ="btn" value="Search" :disabled="!stock">
              <img src="../assets/search-24px.svg">
          </button>
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

<style scoped>
.search-bar{
    display: flex;
    flex-direction: row;
    margin-left:20%;
    margin-right: 20%;
}
.txt-inpt{
    flex-basis: 90%;
}
.btn{
    flex-basis: 10%;
    background-color:#42b983;
    border:none;
}
.btn:disabled{
    background-color:grey;
}
</style>