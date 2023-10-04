<template>
  <div id="create-fluffy-input-images-button" class="list-item input">
    <label for="file-input" class="file-label">
      <img src="@/assets/flaticons/upload_image.png" alt="">
      <span>Bilder <br> auswählen</span>
      <input id="file-input" type="file" @change="handleFileChange" multiple />
    </label>
  </div>
</template>

<script>
export default {
  name: "CreateFluffyInputImagesButton",
  data(){
    return {
      currentImages: [],
    }
  },
  computed: {
    newFluffyImages(){
      return this.$store.getters['adminFluffyCreate/newFluffy'].images;
    }
  },
  methods: {
    handleFileChange(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.currentImages.push({
          name: file.name,
          url: URL.createObjectURL(file),
          file: file
        });
      }
      this.$store.commit('adminFluffyCreate/SET_NEW_FLUFFY_IMAGES', this.currentImages);
    },
  },
  watch: {
    newFluffyImages(newVal){
      this.currentImages = newVal;
    }
  }
}
</script>

<style scoped>
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

</style>