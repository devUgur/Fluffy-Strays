<template>
  <div id="about-text-component">
    <div class="container" ref="container">
      <p class="text">
        Hier schlagen unsere Herzen im Einklang mit den<span class="mark"> Straßentiere</span>n,
        <br> <span class="mark"> die unsere Hilfe so dringend benötigen</span>.
      </p>
      <p class="text">
        <span class="mark">Unser Ziel </span>  ist es, diesen unschuldigen Geschöpfen,
        <span class="mark">den Hunger zu nehmen</span>, deren
        <span class="mark">Schmerzen zu lindern</span> und ihnen
        <span class="mark">ein neues glücklicheres Leben zu schenken</span>.
      </p>
      <p class="text">
        <span class="mark">Mit deiner Unterstützung </span> können wir
        <span class="mark">gemeinsam wahre Wunder bewirken</span>. Tauche ein in unsere Projekte, spüre die Geschichten und
        <span class="mark">werde ein Teil unserer Fluffy Strays Familie</span>, die für das Wohl der Straßentiere kämpft. </p>
      <p class="text">
        <span class="mark">Dein Beitrag bedeutet </span> nicht nur
        <span class="mark">Leben</span>, sondern auch
        <span class="mark">Liebe und Geborgenheit</span>.
        Gemeinsam schaffen wir eine Welt, in der die flauschigen Streuner ein glückliches und gesundes Leben genießen können.
      </p>
    </div>
  </div>
</template>

<script>
import SplitType from "split-type";
import {gsap} from "gsap";

export default {
  name: "HomeView",
  data() {
    return {
      observer: null,
      animatedElements: [],
    };
  },
  methods: {
    async animate() {
      await this.$nextTick(() => {});
      const el = document.querySelectorAll('#about-text-component p');

      // Initialize SplitType for the text element
      const split = await SplitType.create(el);
      if (split.chars.length === 0) {
        console.log("Split chars length === 0");
        return;
      }

      // Create a timeline for the letter animation
      const tl = gsap.timeline();

      // Delay between letter animations
      const letterDelay = 0.02; // Decreased letter delay for smoother animation

      // Loop through each letter and apply bounce animation
      split.chars.forEach((char, index) => {
        tl.fromTo(
            char, // Target element
            {
              y: 0,
            },
            {
              y: -10, // Bounce up by 10 pixels
              ease: 'power3.out', // Adjust the ease for a smoother bounce
            },
            index * letterDelay // Apply a staggered delay
        );

        // Add a bounce back animation with a slight delay
        tl.to(
            char,
            {
              y: 0, // Return to the original position
              ease: 'elastic.out(1, 0.3)', // Adjust the ease to create a bounce effect
            },
            ">-0.01" // Start this animation slightly before the previous one finishes
        );
      });
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        // Überprüfe, ob der Container im Viewport ist.
        if (entry.isIntersecting) {
          // Finde den Container-Element-Referenz.
          const container = this.$refs.container;

          // Finde alle markierten Elemente im Container.
          const markElements = container.querySelectorAll(".mark");
          //this.animate();
          // Durchlaufe die markierten Elemente und triggere die Animationen.
          markElements.forEach((element, index) => {
            // Hier setzen Sie eine Verzögerung (in Millisekunden) für die Animation.
            // Die Verzögerung basiert auf dem Index des Elements.
            const delay = index * 1500; // 500 Millisekunden (0,5 Sekunden) Verzögerung pro Element.

            setTimeout(() => {
              //this.animateElement(element);
            }, delay);
          });
        }
      });
    },
    animateElement(element) {
      element.style.width = "100%"; // Beispielanimation
    },
  },
  mounted() {
    // Initialisiere den Intersection Observer mit gewünschtem Threshold-Wert.
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.2, // Ändere den Threshold-Wert nach Bedarf.
    });

    // Rufe die Methode auf, um den Container zu beobachten.
    this.observer.observe(this.$refs.container);
  },
};
</script>

<style scoped>
#about-text-component{
  text-align: center;
}
.container{
  padding: 50px 30px;
}
p{
  font-size: 22px;
}

.mark {
  position: relative;
  color: var(--color-palette-1-D);
  white-space: pre;
}

span{
  padding: 0;
  margin: 0;
  white-space: nowrap;
}

.text{
  max-width: 900px;
  margin: 40px auto;
  line-height: 35px;
}

img{
  height: 18px;
}


@media (max-width: 768px) {
  p{
    font-size: 16px;
  }
}
</style>