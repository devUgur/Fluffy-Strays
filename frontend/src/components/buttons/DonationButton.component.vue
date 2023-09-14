<template>
  <div id="donation-button-component">
    <button class="donate">
      <span>Jetzt spenden</span>
      <img src="@/assets/flaticons/heart-white.png" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "DonationButtonComponent",
}
</script>

<style scoped>
button.donate{
  background-color: var(--secondary-color);
}
</style>