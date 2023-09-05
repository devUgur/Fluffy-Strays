<template>
  <div id="intro-background-component">
    <div class="bg-image">
      <img src="@/assets/canva/background01.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroBackgroundComponent",

}
</script>

<style scoped>
#intro-background-component{
  width: 100%;
  background-color: orange;
}
.bg-image{
  height: calc(100vh - 350px);
  overflow: hidden;
}
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  z-index: -100;
}

img:hover{
  transform: scale(1.09);
}
</style>