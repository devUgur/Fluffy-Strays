<template>
  <div id="user-personal-details-component">
    <div class="input-item nickname">
      <span class="name">Benutzername</span>
      <input type="text" v-model="user.username">
    </div>
    <div class="fullname">
      <div class="input-item firstname">
        <span class="name">Vorname</span>
        <input type="text" v-model="user.firstname">
      </div>
      <div class="input-item lastname">
        <span class="name">Nachname</span>
        <input type="text" v-model="user.lastname">
      </div>
    </div>
    <div class="auth">
      <div class="input-item email">
        <span class="name">Email</span>
        <input type="email" v-model="user.email">
      </div>
      <div class="input-item password">
        <span class="name">Passwort</span>
        <input type="text" v-model="user.password" readonly>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPersonalDetailsComponent",
  props: ['user'],
  data(){
    return {
      showPassword: false,
    }
  },
}
</script>

<style scoped>
#user-personal-details-component{
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  width: 100%;
  padding: 50px 0;
}
.input-item .name{
  font-size: 14px;
}
.input-item{
  display: flex;
  width: 100%;
  flex-direction: column;
}

.input-item input{
  width: calc(100% - 30px);
  max-width: 300px;
}


.fullname{
  display: flex;
  gap: 10px;
}

.auth{
  display: flex;
  gap: 10px;
}
</style>