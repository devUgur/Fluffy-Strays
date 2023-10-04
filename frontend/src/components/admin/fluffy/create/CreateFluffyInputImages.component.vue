<template>
  <div id="create-fluffy-input-images-component">
    <div class="title">Hinzugefügte Bilder ({{newFluffy.images.length}})</div>
    <div class="list-layout">
      <CreateFluffyInputImagesButtonComponent></CreateFluffyInputImagesButtonComponent>
      <CreateFluffyInputImagesListItemComponent
          v-for="(image, index) in newFluffy.images"
          :image="image"
          :index="index"
      ></CreateFluffyInputImagesListItemComponent>
      <CreateFluffyInputImagesButtonComponent v-if="newFluffy.images.length > 12"></CreateFluffyInputImagesButtonComponent>
    </div>
  </div>
</template>

<script>
import CreateFluffyInputImagesButtonComponent from "@/components/admin/fluffy/create/CreateFluffyInputImagesButton.component.vue";
import CreateFluffyInputImagesListItemComponent from "@/components/admin/fluffy/create/CreateFluffyInputImagesListItem.component.vue";

export default {
  name: "CreateFluffyInputImagesComponent",
  components: {
    CreateFluffyInputImagesButtonComponent,
    CreateFluffyInputImagesListItemComponent
  },
  computed: {
    newFluffy(){
      return this.$store.getters['adminFluffyCreate/newFluffy'];
    },
  },
  data() {
    return {
      selectedImages: [],
    };
  },
  mounted() {
    this.selectedImages = this.newFluffy.images;
  },
};
</script>

<style scoped>
#create-fluffy-input-images-component {
  flex: 1 1 200px;

}
.list-layout{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  overflow-y: auto;
  scrollbar-width: thin;
  gap: 10px;
}

.list-item {
  position: relative;
  flex: 1 1 100px;
  max-width: 130px;
  height: 130px;
  background-color: white;

  display: flex;
  justify-content: center;
  place-items: center;
  overflow: hidden;
}

</style>
