<template>
  <div id="create-fluffy-component">
    <CreateFluffyComponent></CreateFluffyComponent>
    <FluffyListComponent></FluffyListComponent>
  </div>
</template>

<script>
import CreateFluffyComponent from "@/components/admin/fluffy/create/CreateFluffy.component.vue";
import FluffyListComponent from "@/components/admin/fluffy/list/FluffyList.component.vue";
export default {
  name: "",
  components: {
    CreateFluffyComponent,
    FluffyListComponent
  },
}
</script>

<style scoped></style>