<template>
  <div id="home-intro-component">
    <div class="image-layout">
      <img class="active" src="@/assets/canva/background01.jpg" alt="">
      <img src="@/assets/canva/background02.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIntroComponent",
  methods: {
    toggleClass() {
      let images = document.querySelectorAll('#home-intro-component .image-layout img');
      for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active')) {
          images[i].classList.remove('active');
        } else {
          images[i].classList.add('active');
        }
      }
    },
  },
  mounted() {
    setInterval(this.toggleClass, 7000); // Call every 7 seconds
  },
};
</script>

<style scoped>
.image-layout {
  position: relative;
  height: calc(100vh - 100px);
}

img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s;
}

.active {
  opacity: 1;
}
</style>
