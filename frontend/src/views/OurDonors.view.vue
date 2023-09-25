<template>
  <div id="our-donors-view">
    <TitleComponent :title="'Unsere Helden'" :slogan="'Coming soon...'"></TitleComponent>
  </div>
</template>


<script>
import TitleComponent from "@/components/title/title.component.vue";
export default {
  name: "OurDonorsView",
  components: {
    TitleComponent,
  }
}
</script>

<style scoped>
#our-donors-view{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
}
</style>