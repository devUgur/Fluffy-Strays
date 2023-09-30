<template>
  <div id="sign-up-admin-view">
    <div class="container">
      <div class="title">
        <h2>Fluffy Strays - Registrieren</h2>
        <h3>Administration </h3>
      </div>
      <div class="input-content">
        <div class="input-item">
          <span class="input-name">Benutzername</span>
          <input id="username" type="text" v-model="username">
        </div>
        <div class="input-item">
          <span class="input-name">Email</span>
          <input id="email" type="email" v-model="email">
        </div>
        <div class="input-item">
          <span class="input-name">Passwort</span>
          <input id="password" type="password" v-model="password">
        </div>
        <div class="input-item">
          <span class="input-name">Login-Schlüssel</span>
          <input id="key" type="password" v-model="key">
          <button @click="signup"> Registrieren </button>
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
      username: "",
      email: "",
      password: "",
      key: "",
    }
  },
  methods: {
    async signup(){
      try{
        let result = await this.$store.dispatch('admin/signup', {
          username: this.username,
          email: this.email,
          password: this.password,
          key: this.key,
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
#sign-up-admin-view{
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