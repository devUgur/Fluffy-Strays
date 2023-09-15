<template>
  <div id="home-banner-component" class="home-banner">
    <!--
    <div class="icon">
      <img src="@/assets/flaticons/quote-white.png">
    </div>
    -->
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeBannerComponent",
  props: ['text']
}
</script>

<style scoped>
#home-banner-component{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  padding: 30px;
}

p{
  max-width: 600px;
  text-align: center;
  color: white;
  font-size: 22px;
  font-weight: bold;
}

img{
  height: 48px;
}
</style>