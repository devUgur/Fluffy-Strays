<template>
  <div id="scroll-to-top-button" @click="scrollToTop" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <!-- Fügen Sie die <transition> Komponente hinzu -->
    <transition name="fade" mode="out-in">
      <div v-show="hovered" class="tooltip" key="tooltip">
        <div ref="text" class="text" :class="{'active':hovered}">Nach oben scrollen</div>
      </div>
    </transition>
    <img src="@/assets/flaticons/top.png" alt="">
  </div>
</template>

<script>
import SmoothScroll from "smooth-scroll";
import scrollSmooth from "scroll-smooth";
import smoothscroll from 'smoothscroll-polyfill';
export default {
  name: "ScrollToTopButtonComponent",
  data() {
    return {
      hovered: false,
    };
  },
  methods: {
    scrollToTop(){
      this.hovered = false;
      // pure version
      window.scrollTo({ top: 0, behavior: 'smooth' });

      /*
      // smooth-scroll version
      let scroll = new SmoothScroll();
      let anchor = document.querySelector('body');
      let toggle = document.querySelector('#scroll-to-top-button');
      let options = { speed: 400, easing: 'easeOutCubic' };
      scroll.animateScroll(anchor, toggle, options);
       */

      /*
      // scroll-smooth version
      scrollSmooth.to(document.querySelector('body'), {
        duration: 1500,
        //offset: 100,
        callback: elem => console.log(`Yup! Hi ${elem}!`),
      })
       */
    }
  },
  mounted() {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }
};
</script>

<style scoped>

#scroll-to-top-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  display: flex;
  place-items: center;

}

img {
  border-radius: 50%;
  transition: all 0.5s;
  box-shadow: var(--box-shadow-palette-1-A);
  background-color: rgb(240, 240, 240);
}

#scroll-to-top-button:hover img {
  transform: scale(0.8);
  cursor: pointer;
}

.tooltip {
  margin-right: 10px;
  white-space: nowrap;
  height: 100%;
}

.tooltip .text {
  opacity: 0;
  transition: opacity 0.5s;
  padding: 7px;
  border-radius: 12px;
  background-color: var(--color-palette-1-D);
  border: 4px solid white;
  color: white;
  font-weight: bold;
}

/* Fügen Sie die CSS-Regeln für den Opacity-Übergang hinzu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

#scroll-to-top-button:hover .tooltip .text {
  /* Setzen Sie die Opazität direkt beim Hover-Ereignis */
  opacity: 1;
}
</style>
