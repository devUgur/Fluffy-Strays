<template>
  <div id="godfather-button-component">
    <button class="godfather" @mouseenter="startSlide" @mouseleave="stopSlide">
      <span>Pate werden</span>
      <img
          ref="arrowImage"
          src="@/assets/flaticons/right-arrow-white.png"
          alt=""
          class="arrow"
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "GodfatherButtonComponent",
  data() {
    return {
      isSliding: false,
    };
  },
  methods: {
    startSlide() {
      this.isSliding = true;
      this.$refs.arrowImage.style.transition = "transform 0.7s cubic-bezier(0.2, 1, 0.3, 1)";
      this.$refs.arrowImage.style.transform = "translateX(100%)";
      setTimeout(() => {
        this.$refs.arrowImage.style.transition = "transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)";
        this.$refs.arrowImage.style.transform = "translateX(0)";
      }, 700);
    },
    stopSlide() {
      if (this.isSliding) {
        this.$refs.arrowImage.style.transition = "";
        this.$refs.arrowImage.style.transform = "translateX(0)";
        this.isSliding = false;
      }
    },
  },
};
</script>

<style scoped>
button.godfather {
  background-color: var(--primary-color);
  overflow: hidden;
}

.arrow {
  transition: transform 0.7s cubic-bezier(0.2, 1, 0.3, 1);
}

</style>
