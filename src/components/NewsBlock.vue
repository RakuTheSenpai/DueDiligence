<template>
    <div class="news">
        <a :href="news.url" class="links">
        <div class="icon-container">
            <img class="icon" :src="news.image">
        </div>
        <h2 class="headline">{{news.headline}}</h2>
        </a>
     </div>
</template>

<script>
export default {
    name:'NewsBlock',
    props: ['news'],
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #ffff;
}
.news{
    display: flex;
    flex-basis: 47%;
    margin: 1%;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086);
}
.links{
    padding:1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.icon{
    width: 100%;
    height: 100%;
}
.icon-container{
    height: 100%;
    flex-basis: 20%;
}
.headline{
    flex-basis: 80%;
}

</style>