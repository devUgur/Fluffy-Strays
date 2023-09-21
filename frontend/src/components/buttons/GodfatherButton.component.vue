<template>
  <div id="godfather-button-component">
    <button title="coming soon..." class="godfather">
      <span>Pate werden</span>

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
  name: "GodfatherButtonComponent",
  data() {
    return {
      isSliding: false,
    };
  },
  methods: {
    startPulse() {
      this.$refs.heartImage.classList.add("pulse");
    },
    stopPulse() {
      this.$refs.heartImage.classList.remove("pulse");
    },
  },
  mounted() {
    this.startPulse();
  }
};
</script>

<style scoped>
button.godfather {
  background-color: var(--primary-color);
}



.heart {
  transition: transform 0.2s ease-in-out;
}

.pulse {
  animation: pulse 1s infinite;
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
