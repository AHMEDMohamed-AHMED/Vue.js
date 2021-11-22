<template>
  <Header/>
  <h1>hello from the Add restaurant page </h1>
  <section>
    <form @form.prevent></form>
    <div class="container">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="Name" v-model="restaurant.name" placeholder="Enter your Name" >
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" id="address" v-model="restaurant.address" placeholder="Enter your Address" >
      </div>

      <div class="form-group">
        <label for="cont">contact</label>
        <input type="text" id="cont" v-model="restaurant.cont" placeholder="Enter your contact number" >
      </div>

      <button type="submit" v-on:click="addrestaurant"  >Submit</button>

    </div>
  </section>

</template>
<script>
import Header from "./Header";
import axios from "axios";
export default{
  name:'Add',
  data(){
  return{
    restaurant:{
      name:'',
      address:'',
      cont:''
    }
  }
  },
  methods:{
    async addrestaurant(){
      let result = await axios.post('http://localhost:3000/restaurant',{
        name:this.restaurant.name,
        address:this.restaurant.address,
        cont:this.restaurant.cont
      });
      if (result.status==201){
        this.$router.push({name: 'Home'})
      }
    }
  },
  components:{
    Header
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if(!user){
      this.$router.push({name: 'SignUp'});
    }
  }
}
</script>

<style>

</style>