<template>
  <div id="donation-button-component">
    <button title="coming soon..." class="donate" @mouseenter="startSlide" @mouseleave="stopSlide">
      <span>Jetzt spenden</span>
      <img
          ref="arrowImage"
          src="@/assets/flaticons/right-arrow-white.png"
          alt=""
          class="arrow"
          :class="{'slide': isSliding}"
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "DonationButtonComponent",
  data(){
    return {
      isSliding: false,
    }
  },
  methods: {
    startSlide() {
      this.isSliding = true;
    },
    stopSlide() {
      this.isSliding = false;
    },
  },
};
</script>

<style scoped>
button.donate {
  background-color: var(--color-palette-1-C);
  font-weight: bold;
}
.arrow{
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
