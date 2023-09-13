<template>
  <div id="home-intro-component">
    <div class="image-layout">
      <img src="@/assets/canva/background01.jpg" alt="">
      <img src="@/assets/canva/background02.jpg" alt="">
      <IntroWelcomeTextComponent></IntroWelcomeTextComponent>
    </div>
  </div>
</template>

<script>
import IntroWelcomeTextComponent from "@/components/intro/IntroWelcomeText.component.vue";
export default {
  name: "HomeIntroComponent",
  components: {
    IntroWelcomeTextComponent,
  },
  data() {
    return {
      intervalTimer: null,
    };
  },
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
    setTimeout(() => {
      let firstImg = document.querySelectorAll('#home-intro-component .image-layout img')[0];
      firstImg.classList.add('active');
    }, 10);
    this.intervalTimer = setInterval(this.toggleClass, 7000); // Alle 7 Sekunden aufrufen
  },
  beforeUnmount() {
    clearInterval(this.intervalTimer); // clearInterval verwenden, um das Intervall zu löschen
  },
};
</script>

<style scoped>
.image-layout {
  position: relative;
  height: calc(100vh - 100px);
  overflow: hidden;
}

img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s, transform 7s;
  transform: scale(1);
}

.active {
  opacity: 1;
  transform: scale(1.1); /* Zoom auf 1.1x */
}
</style>
