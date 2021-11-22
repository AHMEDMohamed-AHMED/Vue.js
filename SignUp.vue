<template>

  <img class="logo" src="../assets/restro_logo.jpg" alt="RestroLogo">

  <section>
    <form @form.prevent></form>
    <div class="container">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Enter your name">
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" v-model="email" placeholder="Enter your email" >
        </div>

        <div class="form-group">
          <label for="password">password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" >
        </div>
<button type="submit" v-on:click="signup">Submit</button>
      <button ><router-link to="/login">Login</router-link></button>
    </div>
  </section>

</template>

<script>
import axios from  'axios'
export default {
  name:'SignUp',
  data(){
return{
  name:'',
  email:'',
  password:''
}
  },
  methods:{
   async signup(){
      let result = await axios.post("http://localhost:3000/useres",{
        email:this.email,
        name:this.name,
        password:this.password
      });
     console.warn(result);
      if (result.status ==201){
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name: 'Home'});
      }
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
.logo{
  width: 20%;
}

* {
  box-sizing: border-box;
  font-family: "Montserrat";
}
section {
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000033;
  border-radius: 8px;
}
.form-group {
  margin-top: 20px;
  font-size: 20px;
  color: #9e9e9e;
}
.form-group input{
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}
button {
  width: 100%;
  border: none;
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}
</style>