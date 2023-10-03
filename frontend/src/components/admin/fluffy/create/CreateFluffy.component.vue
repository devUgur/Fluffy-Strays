<template>
  <div id="create-fluffy-component">
    <h4>Fluffy erstellen</h4>
    <div class="input-content">
      <CreateFluffyInputDetailsComponent></CreateFluffyInputDetailsComponent>
      <CreateFluffyInputImagesComponent></CreateFluffyInputImagesComponent>
    </div>

  </div>
</template>

<script>
import CreateFluffyInputDetailsComponent from "@/components/admin/fluffy/create/CreateFluffyInputDetails.component.vue";
import CreateFluffyInputImagesComponent from "@/components/admin/fluffy/create/CreateFluffyInputImages.component.vue";
export default {
  name: "CreateFluffyComponent",
  components: {
    CreateFluffyInputImagesComponent,
    CreateFluffyInputDetailsComponent,

  }
}
</script>

<style scoped>


.input-content{
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 30px;
}


</style>