<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><h3>Home</h3></router-link>
      <router-link to="/search"><h3>Search</h3></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  methods:{
    ...mapActions(['fetchTickers'])
  },
  created(){
    this.fetchTickers()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #2c3e50;
  width:100%;
  height:100%;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
