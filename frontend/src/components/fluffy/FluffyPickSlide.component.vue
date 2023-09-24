<template>
  <div id="fluffy-pick-slide">
    <TitleComponent :title="'Unsere Fluffys'" :slogan="'Hilf uns zu helfen'"></TitleComponent>
    <FluffySlidesComponent></FluffySlidesComponent>
  </div>
</template>

<script>
import TitleComponent from "@/components/title/title.component.vue";
import FluffySlidesComponent from "@/components/fluffy/FluffySlides.component.vue";
export default {
  name: "FluffyPickSlideComponent",
  components: {
    TitleComponent,
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