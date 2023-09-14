<template>
  <div id="blog-intro-component">
    <div class="layout">
      <div class="image">
        <div class="image-layout">
          <img src="@/assets/canva/background01.jpg" alt="">
          <img src="@/assets/canva/background02.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogIntroTextComponent from "@/components/blog/BlogIntroText.component.vue";
export default {
  name: "BlogIntroComponent",
  components: {
    BlogIntroTextComponent
  },
  data() {
    return {
      intervalTimer: null,
    };
  },
  methods: {
    toggleClass() {
      let images = document.querySelectorAll('#blog-intro-component .image-layout img');
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
      let firstImg = document.querySelectorAll('#blog-intro-component .image-layout img')[0];
      firstImg.classList.add('active');
    }, 10);
    this.intervalTimer = setInterval(this.toggleClass, 7000); // Alle 7 Sekunden aufrufen
  },
  beforeUnmount() {
    clearInterval(this.intervalTimer); // clearInterval verwenden, um das Intervall zu löschen
  },
}
</script>

<style scoped>
#blog-intro-component{

  min-height: 80vh;
}
.layout{
  position: relative;
  height: calc(80vh - 100px);
}
.image-layout {
  position: relative;
  height: calc(80vh - 100px);
  overflow: hidden;
}
.image{
  position: absolute;
  left: 0; top: 0;
  right: 0; bottom: 0;
  max-height: calc(80vh - 100px);
}
img {
  position: absolute;
  top: 0;
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