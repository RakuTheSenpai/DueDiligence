<template>
    <div style="width:100%; height:100%;">
        <a :href="news.url">
        <h3>{{news.headline}}</h3>
        <img :src="news.image" class="icon">
        </a>
    </div>
</template>

<script>
export default {
    name:'NewsBlock',
    props: ['news']
}
</script>

<style scoped>
.icon{
    width:10%;
    height:10%;
}

</style>