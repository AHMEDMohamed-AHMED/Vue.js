<template>

  <img class="logo" src="../assets/restro_logo.jpg" alt="RestroLogo">

  <section>
    <form @form.prevent></form>
    <div class="container">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" placeholder="Enter your email" >
      </div>

      <div class="form-group">
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" >
      </div>
      <button type="submit" v-on:click="login">Login</button>
      <button ><router-link to="/sign-up">SignUp</router-link></button>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default  {
  name:'Login',
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
   async login(){
      let result = await axios.get(`http://localhost:3000/useres?email=${this.email}&password=${this.password}`)

     if (result.status ==200 && result.data.length>0){
       localStorage.setItem("user-info",JSON.stringify(result.data[0]))
       this.$router.push({name: 'Home'});
     }
      console.warn(result)

    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if(user){
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style>

</style>