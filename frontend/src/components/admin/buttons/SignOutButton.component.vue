<template>
  <div id="sign-out-button-component">
    <button id="sign-out" @click="signOut">Ausloggen</button>
  </div>
</template>

<script>
export default {
  name: "SignOutButtonComponent",
  methods: {
    signOut(){
      this.$store.dispatch('adminUser/signout');
    }
  }
}
</script>


<style scoped>

</style>