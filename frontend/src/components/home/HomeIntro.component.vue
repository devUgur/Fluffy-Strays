<template>
  <div id="intro-background-component">
    <div class="bg-image">
      <img ref="bgImg" src="@/assets/canva/background01.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroBackgroundComponent",
  methods: {
    onStartAnimation() {
      // Warte einen Moment, damit die Komponente vollständig gerendert wird
      setTimeout(() => {
        this.$refs.bgImg.classList.add('animated');
      }, 100); // Hier kannst du die Wartezeit nach Bedarf anpassen
    }
  },
  mounted() {
    this.onStartAnimation();
  }
}
</script>

<style scoped>
#intro-background-component {
  width: 100%;
  background-color: orange;
}
.bg-image {
  height: calc(100vh - 350px);
  overflow: hidden;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 10s ease-in-out;
  z-index: -100;
  transform: scale(1) !important;
}

.animated {
  transform: scale(1.2) !important;
}
</style>
