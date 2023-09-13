<template>
  <div id="intro-welcome-text-component">
    <div class="welcome-container">
      <transition name="fade" mode="out-in">
        <div class="welcome-text">
          <h1> {{ welcomeTexts.de }}</h1>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroWelcomeTextComponent",
  data() {
    return {
      currentLanguage: 'de', // Standardmäßig Deutsch
      welcomeTexts: {
        de: 'Wilkommen',
        tr: 'Hosgeldiniz',
        en: 'Welcome',
      },
    };
  },
  computed: {
    currentWelcomeText() {
      return this.welcomeTexts[this.currentLanguage];
    },
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.welcome-container {
  position: absolute;
  width: 100%;
  display: flex;
  place-items: center;
  justify-content: center;
  height: 100%;
}
.welcome-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 54px;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
}
</style>