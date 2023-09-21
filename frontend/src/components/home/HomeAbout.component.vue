<template>
  <div id="about-text-component">
    <div class="container">
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
    <div class="section-trimmer"></div>
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
        // Überprüfe, ob das Element im Viewport ist.
        if (entry.isIntersecting) {
          // Finde das zugehörige Element in der Beobachtungsliste.
          const animatedElement = this.animatedElements.find(
              (item) => item.element === entry.target
          );

          if (animatedElement && !animatedElement.animated) {
            // Hier setzen Sie eine Verzögerung (in Millisekunden) für die Animation.
            // Zum Beispiel: 500 Millisekunden (0,5 Sekunden) Verzögerung.
            setTimeout(() => {
              this.animateElement(entry.target);
              animatedElement.animated = true;
            }, 500); // Ändern Sie die Verzögerung nach Bedarf.
          }
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

    // Finde alle markierten Elemente und füge sie zur Beobachtungsliste hinzu.
    const markElements = document.querySelectorAll(".mark");
    markElements.forEach((element) => {
      this.observer.observe(element);
      this.animatedElements.push({ element, animated: false });
    });
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
  font-size: 18px;
  font-weight: bold;
}

p span {
  position: relative;
  color: black;
}

.text{
  max-width: 700px;
  margin: 40px auto;
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
  transition: width 0.7s;
  background-color: var(--color-palette-3);
  z-index: -1;

}

.home-banner{
  min-height: 35px !important;
  background-color: var(--color-palette-3);
}

@media (max-width: 768px) {
  p{
    font-size: 16px;
  }
}
</style>