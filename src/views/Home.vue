<template>
  <div>
    {{getPortfolio.length}}
  </div> 
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  computed: mapGetters(['getPortfolio'])
}
</script>

<style>

</style>