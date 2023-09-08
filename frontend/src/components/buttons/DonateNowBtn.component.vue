<template>
  <div id="donate-now-btn-component">
    <button class="donate" @click="donateNow()">
      <span>Jetzt spenden</span>
      <img src="@/assets/flaticons/donate.png" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "DonateNowBtnComponent",
  methods: {
    donateNow(){
      console.log("donate now!");
    }
  }
}
</script>
<style scoped>

</style>