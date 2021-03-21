<template>
    <div class="news-container">
        <NewsBlock v-for="(piece, index) in pieces" :key="index" v-bind:news="piece"/>
    </div>
</template>

<script>
import NewsBlock from '../components/NewsBlock'
export default {
    name: 'NewsView',
    props: ['pieces'],
    components: {
        NewsBlock
    },
}
</script>

<style scoped>
.news-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>