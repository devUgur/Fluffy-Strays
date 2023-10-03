<template>
  <div id="sign-in-admin-view">
    <div class="container">
      <div class="title">
        <h2>Fluffy Strays - Login</h2>
        <h3>Administration </h3>
      </div>
      <div class="input-content">
        <div class="input-item">
          <span class="input-name">Email</span>
          <input type="email" v-model="email">
        </div>
        <div class="input-item">
          <span class="input-name">Passwort</span>
          <input type="password" v-model="password">
        </div>
        <div class="input-item">
          <span class="input-name">Login-Schlüssel</span>
          <input type="password" v-model="loginkey">
          <button @click="signin"> Anmelden </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "",
  components: {},
  data(){
    return {
      email: "",
      password: "",
      loginkey: "",
    }
  },
  methods: {
    async signin(){
      try{
        let result = await this.$store.dispatch('adminUser/signin', {
          email: this.email,
          password: this.password,
          key: this.loginkey,
        })
        console.log(result);
      }catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
#sign-in-admin-view{
  height: 100vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
}
.container{
  max-width: 600px;
}

.title{
  text-align: center;
}

.title h2{
  padding-bottom: 0;
  margin-bottom: 0;
}
.title h3{
  padding-top: 0;
  margin-top: 0;
}

.input-content{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  gap: 10px;
}

.input-item{
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
}

input, button{
  font-family: Poppins;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
}


.input-item button{
  margin-top: 30px;
}


input:focus{
  outline: none;
}
</style>