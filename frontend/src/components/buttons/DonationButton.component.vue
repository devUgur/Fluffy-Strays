<template>
  <div id="donation-button-component">
    <button class="donate" @mouseenter="startPulse" @mouseleave="stopPulse">
      <span>Jetzt spenden</span>
      <img
          ref="heartImage"
          src="@/assets/flaticons/heart-white.png"
          alt=""
          class="heart"
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "DonationButtonComponent",
  methods: {
    startPulse() {
      this.$refs.heartImage.classList.add("pulse");
    },
    stopPulse() {
      this.$refs.heartImage.classList.remove("pulse");
    },
  },
};
</script>

<style scoped>
button.donate {
  background-color: var(--secondary-color);
}

.heart {
  transition: transform 0.2s ease-in-out;
}

.pulse {
  animation: pulse 0.7s infinite;
  transform-origin: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
