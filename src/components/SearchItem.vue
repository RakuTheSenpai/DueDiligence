<template>
  <div>
      <h3> {{data['1. symbol']}} </h3>
      <h4> {{data['2. name']}} </h4>
  </div>
</template>

<script>
export default {
    name: 'SearchItem',
    props: ["data"]
}
</script>

<style>

</style>