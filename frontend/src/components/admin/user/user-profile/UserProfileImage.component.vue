<template>
  <div id="user-profile-image-component">
    <label for="profile-image-input" class="image">
      <input type="file" id="profile-image-input" name="image" @change="handleImageChange">
      <img :src="blobURL || imageSrc" alt="">
      <div class="update-button">
        <transition name="fade-up">
          <div v-if="selectedFile">
            <button @click="updateImage">Bild aktualisieren</button>
          </div>
        </transition>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "UserProfileImageComponent",
  props: ['user'],
  computed: {
    imageSrc(){
      if(this.user && this.user.image && this.user.image.filePath){
        return 'http://localhost:3000/' + this.user.image.filePath
      }else{
        if(!this.$store.getters['adminUser/imageSrc'] || this.$store.getters['adminUser/imageSrc'] === ""){
          return require('@/assets/flaticons/default-user-color-1-D.png');
        }else{
          return this.$store.getters['adminUser/imageSrc'];
        }
      }
    }
  },
  data(){
    return{
      currentImage: null,
      selectedFile: null,
      blobURL : null
    }
  },
  methods: {
    handleImageChange(event) {
      this.selectedFile = event.target.files[0];
      this.blobURL = URL.createObjectURL(this.selectedFile)
      //this.$store.commit('adminUser/SET_IMAGE_SRC', this.blobURL);
    },
    async updateImage(){
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('user', this.user._id);
      await this.$store.dispatch('adminUser/updateImage', formData);
      this.selectedFile = null;
    }
  },
}
</script>

<style scoped>
#user-profile-image-component{

  border-radius: 50%;
  z-index: 10;
  display: flex;
}

.image{
  position: relative;
  width: 200px;
  height: 200px;
  cursor: pointer; /* Zeige die Hand als Cursor beim Überfahren */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form{
  height: 200px;
  width: 100%;
}
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: none;
  background-color: white;
  border-radius: 50%;
}

/* Verstecke das Input-Feld */
#profile-image-input {
  display: none;
}

.update-button{
  position: absolute;
  bottom: -20px;
}

.fade-up-enter-active {
  transition: all 0.3s ease-out;
}

.fade-up-leave-active {
  transition: all 0.8s /*cubic-bezier(1, 0.8, 0.5, 1)*/;
}

.fade-up-enter-from,
.fade-up-leave-to {
  transform: translateY(100%); /* Ändere den Wert auf 100% */
  opacity: 0;
}
</style>
