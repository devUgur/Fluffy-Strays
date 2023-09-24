<template>
  <div id="intro-welcome-text-component">
    <div class="welcome-container" ref="target">
      <div class="logo">
        <h1>Fluffy Strays</h1>
        <p class="slogan">Hilf uns zu helfen</p>
      </div>

      <transition :key="currentLanguage">
        <p class="text" ref="welcomeText" v-text="currentWelcomeText"> </p>
      </transition>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin'; // Import the CSSPlugin

import SplitType from 'split-type';

import TitleComponent from "@/components/title/title.component.vue";

export default {
  name: "IntroWelcomeTextComponent",
  components: {
    TitleComponent,
  },
  data() {
    return {
      // Save the timeline to an instance variable for later use
      animationTimeline: null,
      show: false,
      currentLanguage: 'de', // Standardmäßig Deutsch
      currentIndex: 0,
      multiLangWelcomeText: [
        'Wir freuen uns, das du hier bist!',
        'Seni burada gördüğümüze sevindik!',
        "It's a pleasure to have you here!",
      ],
    };
  },
  computed: {
    currentWelcomeText() {
      const currentShortLang = this.$store.getters['language/current'];
      if (currentShortLang) {
        const welcomeText = this.multiLangWelcomeText[this.currentIndex];
        if (welcomeText) {
          return welcomeText;
        }
      }
      return null;
    },
  },
  methods: {
    async animate() {
      await this.$nextTick(() => {});
      const el = this.$refs.welcomeText;

      // Initialize SplitType for the text element
      const split = await SplitType.create(el);
      if (split.chars.length === 0) {
        console.log("Split chars length === 0");
        return;
      }

      // Create a timeline for the letter animation
      const tl = gsap.timeline();

      // Use fromTo to animate opacity
      tl.fromTo(
          split.chars, // Target elements
          {
            y: 100,
            opacity: 0, // Start opacity
          },
          {
            y: 0,
            opacity: 1, // End opacity
            stagger: 0.05,
            ease: 'power2.out',
          }
      );

      // Add a delay before updating currentIndex
      tl.to({}, {
        duration: 1,
      });

      tl.fromTo(this.$refs.welcomeText, // Target elements
          {
            opacity: 1, // Start opacity
          },
          {
            y: 0,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              split.revert();
              tl.set(this.$refs.welcomeText, {
                opacity: 1
              });
              this.currentIndex = (this.currentIndex + 1) % this.multiLangWelcomeText.length;
            }
          }
      );
      // Save the timeline to an instance variable for later use
      this.animationTimeline = tl;
    },
  },
  mounted() {
    this.$store.dispatch('language/select', null);
    gsap.registerPlugin(CSSPlugin); // Register the CSSPlugin
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      this.$store.dispatch('language/select', { short: "DE", name: "German" });
    }, 20);
  },
  watch: {
    currentWelcomeText(newVal) {
      this.animate();
    },
  },
  beforeUnmount() {
    // Ensure that any ongoing animations are stopped when the component is unmounted
    if (this.animationTimeline) {
      this.animationTimeline.kill(); // Kill the animation timeline
      console.log("kill it")
    }
  }
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
  padding: 0 30px;
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
  font-weight: bold;
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