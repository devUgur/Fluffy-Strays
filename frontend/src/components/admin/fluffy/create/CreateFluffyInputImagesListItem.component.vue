<template>
  <div id="create-fluffy-input-images-list-item" class="list-item">
    <div class="option"
         :class="{'blur-light': hovered}"
         @mouseenter="hovered = true"
         @mouseleave="hovered = false"
    >
      <transition name="fade-up">
        <img v-if="hovered" src="@/assets/flaticons/bon-white.png" alt="" @click="removeImage(index)">
      </transition>
    </div>
    <img :src="currentImage.url" :alt="image.name" />
  </div>
</template>

<script>
export default {
  name: "CreateFluffyInputImagesListItemComponent",
  props: ['image', 'index'],
  computed: {
    currentImage(){
      if(typeof this.image == "string"){
        console.log("hurray")
        return {
          url: "http://localhost:3000/fluffyimages/" + this.image,
        }
      }
      return this.image;
    }
  },
  data(){
    return {
      hovered: false,
    }
  },
  methods: {
    removeImage(index) {
      // Entferne das Bild aus selectedImages anhand des Index
      this.selectedImages.splice(index, 1);

      // Aktualisiere newFluffy.images mit den verbleibenden Bildern
      this.$store.commit('adminFluffyCreate/SET_NEW_FLUFFY_IMAGES', this.selectedImages);
    },
    handleImageMouseOver(){
      this.hovered = true;
    },
    inputImageSrc(image){
      return image.url
    },
  },
}
</script>

<style scoped>

.list-item .option{
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.5s ease-out;
}

.list-item .option img{
  cursor: pointer;
  height: 32px;
  width: 32px;
}

img{
  height: 100%;
  width: 100%;
  object-fit: cover;
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