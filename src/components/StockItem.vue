<template>
    <div class="stock">
        <div class="symbol">
            <h3>{{stock.symbol}}</h3>
        </div>
        <div class="price" v-bind:class="{gain: hasGain, loss: !hasGain}">
            <h5>{{stock.price}}</h5>
        </div>
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
    flex-basis: 20%;
}
.gain{
    color:rgb(1, 153, 1);
    background: rgb(0, 255, 0);
}
.loss{
    color:rgb(153, 1, 1);
    background-color:red;
}
.stock{
    flex-basis: 10%;
    display: flex;
    flex-direction: column;
    margin: 1%;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086);
}
.symbol{
    flex-basis: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>