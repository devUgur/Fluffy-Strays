<template>
  <div id="about-text-component">
    <div class="container">
      <h1> Fluffy Strays</h1>
      <p class="slogan">Hilf uns zu helfen</p>
      <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis fugiat neque nisi officia
        quibusdam rerum sint totam, unde veritatis. Ab aspernatur beatae dolores esse minima porro, quam temporibus
        veritatis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {}
}
</script>

<style scoped>
#about-text-component{
  text-align: center;
}
.container{
  padding: 100px 0;
}
p{
  font-weight: bold;
  font-size: 13px;
}
p.slogan{
  font-size: 20px;
  font-family: Indie, sans-serif;
}

.about-text{
  max-width: 600px;
  margin: 40px auto;
}
</style>