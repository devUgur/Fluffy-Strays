<template>
  <div id="donation-button-component">
    <button title="coming soon..." class="donate" @mouseenter="startSlide" @mouseleave="startSlide">
      <span>Jetzt spenden</span>
      <img
          ref="arrowImage"
          src="@/assets/flaticons/right-arrow-white.png"
          alt=""
          class="arrow slide"
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "DonationButtonComponent",
  methods: {
    startSlide() {
      this.isSliding = true;
      this.$refs.arrowImage.style.transition = "transform 1s cubic-bezier(0.2, 1, 0.2, 1)";
      this.$refs.arrowImage.style.transform = "translateX(50%)";
      setTimeout(() => {
        this.$refs.arrowImage.style.transition = "transform 0.5s cubic-bezier(0.2, 1, 0.2, 1)";
        this.$refs.arrowImage.style.transform = "translateX(0)";
      }, 1000);
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
button.donate {
  background-color: var(--secondary-color);
}

.slide {
  animation: slide 1s infinite;
  transform-origin: center;
}
@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: scale(1);
  }
}
</style>
