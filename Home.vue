<template>
  <Header/>
  <h1>hello {{name}} from the home page </h1>
  <table>
    <tr>

      <td>Name</td>
      <td>address</td>
      <td>contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{item.name}}</td>
      <td>{{item.address}}</td>
      <td>{{item.cont}}</td>
      <td><router-link :to="'/update/'+item.id">Update</router-link>
      <button v-on:click="Deleterestaurant(item.id)">Delete</button></td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header";
import axios from "axios";
export default{
  name:'Home',
  data(){
    return{
      name:'',
      restaurant:[]
    }
  },
  methods:{
   async Deleterestaurant(id){
      let result = await axios.delete("http://localhost:3000/restaurant/"+id);
      if(result.status == 200){
        this.lodadata();
      }

    },

   async  lodadata(){
      let user = localStorage.getItem('user-info')
      this.name= JSON.parse(user).name;
      if(!user){
        this.$router.push({name: 'SignUp'});
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurant = result.data;
    }
  },
  components:{
    Header
  },
 async mounted() {
this.lodadata();
  }
}
</script>

<style>

td{
  width: 40%;
padding: 20px;
}
table {
  border-collapse: collapse;
  margin: auto;
  width: 80%;
  box-shadow: 0px 0px 20px rgba(10, 10, 10, 0.2);
}


tr {
  background-color: white;
  color: rgba(66, 66, 66, 0.89);
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 2%;
}
</style>