<template>
  <div id="title-component">
    <h1> {{ title }}</h1>
    <p class="slogan">
      {{ slogan }}
      <img src="@/assets/flaticons/heart2.png" alt="">
    </p>
  </div>
</template>
<script>
export default {
  props: ['title', 'slogan']
}
</script>

<style scoped>
#title-component{
  text-align: center;
  background-color: aquamarine;
}
p.slogan{
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 20px;
  font-family: Indie, sans-serif;
}

img{
  height: 18px;
}
</style>