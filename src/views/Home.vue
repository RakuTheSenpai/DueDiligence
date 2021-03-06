<template>
  <div>
    <h1>Your portfolio</h1>
    <div v-if="getPortfolio.length == 0">
      You have no stocks in your portfolio yet!
    </div>
    <div v-if="getPortfolio.length > 0" class="stock-container">
      <StockItem v-for="stock in getPortfolio" :key="stock.symbol" v-bind:stock ="stock"/>
    </div>
    <h1>Here's how your stock has performed lately</h1>
    <h1>The latest talk on your portfolio</h1>
  </div> 
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import StockItem from '../components/StockItem'
export default {
  name: 'Home',
  computed: mapGetters(['getPortfolio']),
  methods: {
    ...mapActions(['quotePortfolio'])
  },
  components: {
    StockItem
  },
  async created(){
    console.log(this.getPortfolio)
    this.quotePortfolio().then(
      this.$forceUpdate()
    )
  }
}
</script>

<style scoped>
.stock-container{
  display: flex;
  flex-direction: colum;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}
</style>