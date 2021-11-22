<template>
  <Header/>
  <h1>hello from the update restaurant page </h1>
  <section>
    <form @form.prevent></form>
    <div class="container">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="Name" v-model="restaurant.name" placeholder="Enter your email" >
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" id="address" v-model="restaurant.address" placeholder="Enter your Address" >
      </div>

      <div class="form-group">
        <label for="cont">contact</label>
        <input type="text" id="cont" v-model="restaurant.cont" placeholder="Enter your contact number" >
      </div>

      <button type="submit" v-on:click="updaterestaurant" >Submit</button>

    </div>
  </section>
</template>
<script>
import Header from "./Header";
import axios from "axios";
export default{
  name:'update',
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
   async updaterestaurant(){
      let result = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id,{
        name:this.restaurant.name,
        address:this.restaurant.address,
        cont:this.restaurant.cont
      });
      if (result.status==200){
        this.$router.push({name: 'Home'})
      }
    }
  },
  components:{
    Header
  },
   async mounted() {
    let user = localStorage.getItem('user-info')
    if(!user){
      this.$router.push({name: 'SignUp'});
    }
    let result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)

     this.restaurant=result.data;
  }
}
</script>

<style>

</style>