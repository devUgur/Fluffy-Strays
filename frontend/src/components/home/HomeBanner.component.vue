<template>
  <div id="home-banner-component" class="home-banner">
    <!--
    <div class="icon">
      <img src="@/assets/flaticons/quote-white.png">
    </div>
    -->
    <div v-for="(text, index) in texts">
      <p class="" :class="{'title': index === 0 }">{{text}}</p>
    </div>
    <div v-if="texts.length === 1">
      <p class="slogan">Hilf uns zu helfen</p>
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
  border-bottom: 5px solid white;
}

p{
  max-width: 750px;
  text-align: center;
  color: white;
  font-size: 22px;
  font-weight: bold;
}

.title{
  font-size: 32px;
}
img{
  height: 48px;
}
</style>