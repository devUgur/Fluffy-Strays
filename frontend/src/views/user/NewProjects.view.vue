<template>
  <div id="new-projects-view">
    <TitleComponent :title="'Neue Projekte'" :slogan="'Coming soon...'"></TitleComponent>
  </div>
</template>


<script>
import TitleComponent from "@/components/title/title.component.vue";
export default {
  name: "NewProjectsView",
  components: {
    TitleComponent,
  }
}
</script>

<style scoped>
#new-projects-view{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
}
</style>