<template>
  <div id="blog-view">
    <TitleComponent :title="'Fluffy Strays Blog'" :slogan="'Coming soon...'"></TitleComponent>
  </div>
</template>


<script>
import TitleComponent from "@/components/title/title.component.vue";
export default {
  name: "BlogView",
  components: {
    TitleComponent,
  }
}
</script>

<style scoped>
#blog-view{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
}
</style>