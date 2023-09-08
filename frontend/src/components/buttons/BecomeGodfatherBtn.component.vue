<template>
  <div id="become-godfather-component">
    <button class="donate" @click="becomeGodfather()">
      <span>dauerhaft helfen, Pate werden</span>
      <img src="@/assets/flaticons/handshake.png">
    </button>
  </div>
</template>

<script>
export default {
  name: "BecomeGodfatherBtnComponent",
  methods: {
    becomeGodfather(){
      console.log("Become godfather!");
    }
  }
}
</script>

<style scoped>
button {
  background-color: #1f7cf5;
  padding: 15px 20px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-radius: 3px;

  display: flex;
  place-items: center;
  gap: 5px;
}

button img{}
</style>