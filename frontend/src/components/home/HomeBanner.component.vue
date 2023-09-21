<template>
  <div id="home-banner-component" class="home-banner">
    <!--
    <div class="icon">
      <img src="@/assets/flaticons/quote-white.png">
    </div>
    -->
    <div v-for="text in texts">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBannerComponent",
  props: ['texts']
}
</script>

<style scoped>
#home-banner-component{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-evenly;
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