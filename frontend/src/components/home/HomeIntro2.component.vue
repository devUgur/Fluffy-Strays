<template>
  <div id="home-intro-component">
    <div class="image-layout">
      <div class="parallax-bg" id="bg1"></div>
      <div class="parallax-bg" id="bg2"></div>
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
      let images = document.querySelectorAll('#home-intro-component .image-layout .parallax-bg');
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
      let firstImg = document.querySelector('#bg1');
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

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s, transform 7s;
  z-index: -1;
  background-attachment: fixed;
  background-position: center;

}

#bg1 {
  background-image: url("@/assets/canva/background01.jpg");
}

#bg2 {
  background-image: url("@/assets/canva/background02.jpg");
}

.active {
  opacity: 1;
  transform: scale(1.1); /* Zoom auf 1.1x */
}
</style>
