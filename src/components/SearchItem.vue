<template>
  <div class="container">
    <div class="symbol">
      <h1> {{stock.symbol}}</h1>
      <p> {{stock.description}} </p>
    </div>
    <div class="buttons">
      <img src="../assets/add_circle_outline-24px.svg" class="icon" 
           @click="handleAddToPortfolio" v-if="!isInPortfolio">
      <img src="../assets/remove_circle_outline-24px.svg" class="icon" 
           @click="handleRemoveFromPortfolio" v-if="isInPortfolio" >
      <img src="../assets/help_outline-24px.svg" class="icon">
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'SearchItem',
    props: ["stock"],
    computed: mapGetters(['getPortfolio']),
    data(){
      return {
        isInPortfolio: false
      }
    },
    methods: {
      ...mapActions(['addToPortfolio', 'removeFromPortfolio']),
      handleAddToPortfolio(){
        this.addToPortfolio(this.stock)
        this.isInPortfolio = true
        this.$forceUpdate()
      },
      handleRemoveFromPortfolio(){
        this.removeFromPortfolio(this.stock)
        this.isInPortfolio = false
        this.$forceUpdate()
      }
    }
}
</script>

<style scoped>
  .visible{
    visibility: hidden;
  }
  .container{
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.205);
    width:20%;
  }
  .symbol{
    display: flex;
    flex-direction: column;
    flex: 4;
  }
  .buttons{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around; 
    height: 100%;
  }
  .icon{
    width:50%;
    height: 50%;
  }

</style>