<template>
  <div id="fluffy-pick-slide">
    <div class="title">
      <h1>unsere Fluffys</h1>
      <p>Wähle dein Liebling</p>
    </div>
    <FluffySlidesComponent></FluffySlidesComponent>
  </div>
</template>

<script>
import FluffySlidesComponent from "@/components/fluffy/FluffySlides.component.vue";
export default {
  name: "FluffyPickSlideComponent",
  components: {
    FluffySlidesComponent
  }

}
</script>

<style scoped>
.title {
  text-align: center;
  padding-bottom: 50px;
}
p {
  font-weight: bold;
  font-size: 20px;
  font-family: Indie, sans-serif;
}
</style>