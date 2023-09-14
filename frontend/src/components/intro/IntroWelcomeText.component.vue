<template>
  <div id="intro-welcome-text-component">
    <div class="welcome-container" ref="target">
      <transition appear @before-enter="beforeEnterAnimation" @enter="enterAnimation" :key="currentLanguage">
        <h1 class="welcome-text" ref="text" v-show="show">
          {{ currentWelcomeText }}
        </h1>
      </transition>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "IntroWelcomeTextComponent",
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
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(async ([entry]) => {
      this.show = entry && entry.isIntersecting;
    }, options);

    observer.observe(this.$refs.target);
  },
  watch: {
    currentWelcomeText(newVal) {
      // Wenn currentWelcomeText sich ändert, führe die Letter-Animation erneut aus
      //this.playLetterAnimation(newVal);
    }
  },
};
</script>

<style scoped>
/* Add styles for letter animation */
.letter {
  display: inline-block;
  transform-origin: center bottom;
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
  font-size: 84px;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  color: whitesmoke;
}
/* Add styles for letter animation */
.letter {
  display: inline-block;
  transform-origin: center bottom;
}
</style>
