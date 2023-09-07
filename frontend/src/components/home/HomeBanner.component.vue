<template>
  <div id="home-banner-component" class="home-banner">
    <div class="icon">
      <img src="@/assets/flaticons/quote-white.png">
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolorum ea eligendi est, numquam quaerat. Ad
      optio perferendis perspiciatis possimus?</p>
  </div>
</template>

<script>
export default {
  name: "HomeBannerComponent",
}
</script>

<style scoped>
#home-banner-component{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
}

p{
  max-width: 600px;
  text-align: center;
  color: white;
}

img{
  height: 48px;
}
</style>