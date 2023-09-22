<template>
  <div id="title-component">
    <h1 v-html="title"></h1>
    <p class="slogan" v-html="slogan">

    </p>
    <img src="@/assets/flaticons/heart2.png" alt="">
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
  margin: var(--home-vertical-padding) 30px;

}
p.slogan{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
  font-size: 20px;
  font-family: Indie, sans-serif;
}

img{
  margin: 15px;
  height: 18px;
}
</style>