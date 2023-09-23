<template>
  <div id="scroll-to-top-button" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <!-- Fügen Sie die <transition> Komponente hinzu -->
    <transition name="fade" mode="out-in">
      <div v-show="hovered" class="tooltip" key="tooltip">
        <div class="text" :class="{'active':hovered}">Nach oben scrollen</div>
      </div>
    </transition>
    <img src="@/assets/flaticons/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "ScrollToTopButtonComponent",
  data() {
    return {
      hovered: false,
    };
  },
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
