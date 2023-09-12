<template>
  <div id="intro-background-component">
    <div class="bg-image">
      <transition name="fade-in-out" mode="out-in">
        <img
            :key="currentImageSrc"
        :src="currentImageSrc"
        alt=""
        class="bg-layout"
        >
      </transition>
    </div>
  </div>
</template>


<script>
import HomeIntroSlideComponent from "@/components/home/HomeIntroSlide.component.vue";
export default {
  name: "IntroBackgroundComponent",
  components: {
    HomeIntroSlideComponent
  },
  computed: {
    currentImageSrc() {
      return require(`@/assets/canva/${this.slides[this.displayIndex].imageName}`);
    },
  },
  data() {
    return {
      displayIndex: 0,
      slides: [
        { imageName: "background01.jpg" },
        { imageName: "background02.jpg" }
      ],
      slideTimer: null
    };
  },
  methods: {
    timer() {
      if (this.displayIndex < this.slides.length - 1) {
        this.displayIndex++;
      } else {
        this.displayIndex = 0;
      }
    },
  },
  mounted() {
    this.slideTimer = setInterval(this.timer, 3000);
  }
};
</script>

<style scoped>
#intro-background-component {
  width: 100%;
}
.bg-image {
  position: relative;
  height: calc(100vh - 100px);
  overflow: hidden;
}
img.bg-layout {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: opacity 0.5s, transform 0.5s;
}

.fade-in-out-enter-active{
  opacity: 1;

}
.fade-in-out-leave-active {
  opacity: 1;

}
.fade-in-out-enter, .fade-in-out-leave-to {
  opacity: 0;
}

.fade-in-out-enter-active {
  animation: zoom-in 3s; /* Apply the zoom-in animation when entering */
}

@keyframes zoom-in {
  0% {
    transform: scale(1); /* Start from the zoomed state */
  }
  100% {
    transform: scale(1.1); /* End at the original state */
  }
}
</style>

