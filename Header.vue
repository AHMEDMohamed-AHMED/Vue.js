<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>


<script>
import routers from "../routers";

export default {
  name:'Header',
  methods:{
    logout(){
      localStorage.clear();
      routers.push({name:'Login'})
    }
  }
}
</script>
<style>
.nav{
  background-color: #333;
  overflow: hidden;
  height: 20%;
}
.nav a {
  float: left;
  font-size: 30px;
  color: white;
  margin: 14px 16px;
  padding: 15px;
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.nav a:hover{
  background-color: #ddd;
  color: #333;
}
</style>