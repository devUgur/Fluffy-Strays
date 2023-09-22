<template>
  <div id="about-text-component">
    <div class="container" ref="container">
      <p class="text">
        Hier schlagen <span><span class="mark"></span> unsere Herzen im Einklang mit den Straßentieren,</span>
        <br> die unsere Hilfe so dringend benötigen.
      </p>
      <p class="text">
        <span><span class="mark"></span> Unser Ziel </span>  ist es, diesen unschuldigen Geschöpfen,
        <span><span class="mark"></span> den Hunger zu nehmen, </span> deren
        <span><span class="mark"></span> Schmerzen zu lindern </span> und ihnen
        <span><span class="mark"></span> ein neues glücklicheres Leben zu schenken. </span>
      </p>
      <p class="text">
        <span><span class="mark"></span> Mit deiner Unterstützung </span> können wir
        <span><span class="mark"></span> gemeinsam wahre Wunder bewirken. </span> Tauche ein in unsere Projekte, spüre die Geschichten und
        <span><span class="mark"></span> werde ein Teil unserer Fluffy Strays Familie, </span> die für das Wohl der Straßentiere kämpft. </p>
      <p class="text">
        <span><span class="mark"></span> Dein Beitrag bedeutet </span> nicht nur
        <span><span class="mark"></span> Leben, </span> sondern auch
        <span><span class="mark"></span> Liebe und Geborgenheit. </span>
        Gemeinsam schaffen wir eine Welt, in der die flauschigen Streuner ein glückliches und gesundes Leben genießen können. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      observer: null,
      animatedElements: [],
    };
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        // Überprüfe, ob der Container im Viewport ist.
        if (entry.isIntersecting) {
          // Finde den Container-Element-Referenz.
          const container = this.$refs.container;

          // Finde alle markierten Elemente im Container.
          const markElements = container.querySelectorAll(".mark");

          // Durchlaufe die markierten Elemente und triggere die Animationen.
          markElements.forEach((element, index) => {
            // Hier setzen Sie eine Verzögerung (in Millisekunden) für die Animation.
            // Die Verzögerung basiert auf dem Index des Elements.
            const delay = index * 1500; // 500 Millisekunden (0,5 Sekunden) Verzögerung pro Element.

            setTimeout(() => {
              this.animateElement(element);
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

p > span {
  position: relative;
  color: var(--color-palette-1-D);
  white-space: pre;
}

.text{
  max-width: 900px;
  margin: 40px auto;
  line-height: 35px;
}

img{
  height: 18px;
}


.mark {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0%;
  transition: width ease 2s;
  background-color: var(--color-palette-3);
  opacity: 0.5;
  z-index: -1;

}


@media (max-width: 768px) {
  p{
    font-size: 16px;
  }
}
</style>