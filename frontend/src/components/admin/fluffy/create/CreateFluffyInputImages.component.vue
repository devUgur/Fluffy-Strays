<template>
  <div id="create-fluffy-input-images-component">
    <div class="title">Hinzugefügte Bilder ({{selectedImages.length}})</div>
    <div class="list-layout">
      <div class="list images">
        <div class="list-item input">
          <label for="file-input" class="file-label">
            <img src="@/assets/flaticons/upload_image.png" alt="">
            <span>Bilder <br> auswählen</span>
            <input id="file-input" type="file" @change="handleFileChange" multiple />
          </label>
        </div>
        <div class="list-item image" v-for="(image, index) in newFluffy.images" :key="image.name">
          <div class="option" :class="{'blur-light': image.hovered}" @mouseenter="image.hovered = true" @mouseleave="image.hovered = null">
            <transition name="fade-up">
              <img v-if="image.hovered" src="@/assets/flaticons/bon-white.png" alt="" @click="removeImage(index)">
            </transition>
          </div>
          <img :src="image.url" :alt="image.name" />
        </div>

        <div class="list-item input" v-if="selectedImages.length > 14">
          <label for="file-input" class="file-label">
            <img src="@/assets/flaticons/upload_image.png" alt="">
            <span>Bilder <br> auswählen</span>
            <input id="file-input" type="file" @change="handleFileChange" multiple />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateFluffyInputImagesComponent",
  computed: {
    newFluffy(){
      return this.$store.getters['adminFluffyCreate/newFluffy']
    },
    newFluffyImages(){
      if(this.newFluffy){
        return this.newFluffy.images;
      }
      return []
    }
  },
  data() {
    return {
      selectedImages: [],
    };
  },
  methods: {
    handleFileChange(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.selectedImages.push({
          name: file.name,
          url: URL.createObjectURL(file),
          file: file
        });
      }
      this.$store.commit('adminFluffyCreate/SET_NEW_FLUFFY_IMAGES', this.selectedImages);
    },
    removeImage(index) {
      // Entferne das Bild aus selectedImages anhand des Index
      this.selectedImages.splice(index, 1);

      // Aktualisiere newFluffy.images mit den verbleibenden Bildern
      this.$store.commit('adminFluffyCreate/SET_NEW_FLUFFY_IMAGES', this.selectedImages);
    }
  },
  mounted() {
    this.selectedImages = this.newFluffy.images;
  },
  watch: {
    newFluffyImages(newVal){
      this.selectedImages = newVal;
    }
  }
};
</script>

<style scoped>
#create-fluffy-input-images-component {
  flex: 1 1 200px;

}
.list-layout{
  /*border-radius: 30px;*/
  overflow: hidden;
}
.list.images {
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
}

.list-item.input {
  position: relative;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-item .option{
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  transition: all 0.5s ease-out;
}

.list-item .option img{
  cursor: pointer;
  height: 32px;
  width: 32px;
}
.image{
  position: relative;
}

img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* Neues Styling für den Input-Typ "Datei" */
.file-label {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  cursor: pointer;
  background: var(--color-palette-1-D);
  height: calc(100% - 20px);
  width: 100%;
  border-radius: 15px;
  margin: 10px;
  text-align: center;
  transition: background 0.5s;
}

.file-label:hover {
  border: 4px solid var(--color-palette-1-D);
  height: calc(100% - 28px);
  width: calc(100% - 8px);
  background: white;
}
.file-label:hover span{
  color: var(--color-palette-1-D);
}

.file-label img{
  height: 32px;
  width: 32px;
}

.file-label span {
  font-size: 12px;
  color: white;
  transition: color 0.5s;
}

/* Verstecke den ursprünglichen Input */
input[type="file"] {
  display: none;
}

/* fade UP */

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
