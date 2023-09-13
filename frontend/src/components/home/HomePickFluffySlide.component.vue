<template>
  <div id="our-fluffys-component">
    <div class="container">
      <FluffyPickSlideComponent></FluffyPickSlideComponent>
    </div>
  </div>
</template>

<script>
import FluffyPickSlideComponent from "@/components/fluffy/FluffyPickSlide.component.vue";
export default {
  name: "HomePickFluffySlideComponent",
  components: {
    FluffyPickSlideComponent
  }
};
</script>

<style scoped>
.container {
  padding-bottom: var(--home-vertical-padding);
}
</style>
