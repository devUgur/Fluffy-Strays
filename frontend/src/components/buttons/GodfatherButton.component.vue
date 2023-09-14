<template>
  <div id="godfather-button-component">
    <button class="godfather">
      <span>Pate werden</span>
      <img src="@/assets/flaticons/right-arrow-white.png" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "GodfatherButtonComponent"
}
</script>

<style scoped>
button.godfather{
  background-color: var(--primary-color);
}
</style>