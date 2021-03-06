<template>
    <div class="stock-container">
        <h3>{{stock.symbol}}</h3>
        <h5 class="price" v-bind:class="{gain: hasGain, loss: !hasGain}">{{stock.price}}</h5>
    </div>
</template>

<script>
export default {
    name: "StockItem",
    props: ['stock'],
    data(){
        return {
            hasGain: false
        }
    },
    created(){
        let diff = this.stock.price - this.stock.close_price
        this.hasGain = diff >= 0
    }
}
</script>

<style scoped>
.price{
    background: gray;
}
.gain{
    color:rgb(0, 255, 0);
}
.loss{
    color:red;
}
.stock-container{
    border-radius: 10%;
    width:10%;
    flex:1;
    display: flex;
    flex-direction: column;
}
</style>