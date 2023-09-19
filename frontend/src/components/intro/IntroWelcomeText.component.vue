<template>
  <div id="intro-welcome-text-component">
    <div class="welcome-container" ref="target">
      <div class="logo">
        <transition appear @before-enter="beforeEnterAnimation" @enter="enterAnimation" :key="currentLanguage">
          <h1>Fluffy Strays</h1>
        </transition>
        <transition appear @before-enter="beforeEnterAnimation" @enter="enterAnimation" :key="currentLanguage">
          <p class="slogan"> Hilf uns zu Helfen </p>
        </transition>
      </div>

      <div class="text"> Herzlich Willkommen auf unserer Webseite </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

import TitleComponent from "@/components/title/title.component.vue";

export default {
  name: "IntroWelcomeTextComponent",
  components: {
    TitleComponent,
  },
  data() {
    return {
      show: false,
      currentLanguage: 'de', // Standardmäßig Deutsch
      welcomeTexts: {
        de: 'Willkommen',
        tr: 'Hosgeldiniz',
        en: 'Welcome',
      },
    };
  },
  computed: {
    currentWelcomeText() {
      const currentShortLang = this.$store.getters['language/current'];
      if (currentShortLang) {
        const welcomeText = this.welcomeTexts[currentShortLang.short.toLowerCase()];
        if (welcomeText) {
          return welcomeText;
        }
      }
      return null;
    },
  },
  methods: {
    async playLetterAnimation() {
      const el = this.$refs.text;
      el.innerText = this.currentWelcomeText;
      const split = new SplitType(el);
      if (split.chars.length === 0) {
        console.log("Split chars length === 0");
        return;
      }

      // Erstelle eine Timeline für die Letter-Animation
      const tl = gsap.timeline();
      console.log("wtf" , split.chars)

      // Setze den Anfangszustand der Buchstaben
      tl.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: 'power2.out',
      });
    },
    beforeEnterAnimation(el) {
      /*
      const split = new SplitType(el);
      if (split.chars.length === 0) {
        console.log("Split chars length === 0");
        return;
      }

      // Set initial letter state
      gsap.set(split.chars, { y: 100, opacity: 0 });
       */
    },
    enterAnimation(el) {
      // You can add any enter animations here if needed.
      // Initialize SplitType for the text element
      const split = new SplitType(el);
      if (split.chars.length === 0) {
        console.log("Split chars length === 0");
        return;
      }

      // Create a timeline for the letter animation
      const tl = gsap.timeline();

      // Set initial letter state
      tl.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: 'power2.out',
      });
    },
  },
  mounted() {
    const options = {
      threshold: 0.0,
    };

    const observer = new IntersectionObserver(async ([entry]) => {
      this.show = entry && entry.isIntersecting;
    }, options);

    observer.observe(this.$refs.target);
  },
  watch: {
    show(newVal) {
      console.log(newVal)
    }
  },
};
</script>

<style scoped>
#intro-welcome-text-component{
  position: absolute;
  width: calc(100% - 60px);
  display: flex;
  place-items: center;
  justify-content: center;
  height: 100%;
  color: whitesmoke;
  padding: 0 20px;
  text-shadow:  1px  1px 1px black,
  1px -1px 1px black,
  -1px  1px 1px black,
  -1px -1px 1px black;
}

.welcome-container{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  height: calc(100%);
}

h1 {
  font-size: 64px;
}

p {
  font-size: 32px;
  font-weight: bold;
}

.text{
  font-size: 32px;
}

@media (max-width: 768px) {
  h1{
    font-size: 48px;
  }

  p {
    font-size: 22px;
    font-weight: bold;
  }

  .text{
    font-size: 22px;
  }
}
</style>
