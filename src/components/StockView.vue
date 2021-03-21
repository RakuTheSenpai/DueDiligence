<template>
  <div class="stock-container">
      <StockItem v-for="stock in stocks" :key="stock.symbol" v-bind:stock ="stock"/>
  </div>
</template>

<script>
import StockItem from '../components/StockItem'
export default {
    name: "StockView",
    props: ['stocks'],
    components:{
      StockItem
    }
}
</script>

<style scoped>
  .stock-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 50%;
  }

</style>