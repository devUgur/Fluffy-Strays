<template>
  <div id="about-text-component">
    <div class="container">
      <TitleComponent :title="'Fluffy Strays'" :slogan="'Hilf uns zu helfen'"></TitleComponent>
      <p class="text"> Herzlich Willkommen auf unserer Webseite </p>
      <p class="text"> Hier schlagen unsere Herzen im Einklang <br> mit den Straßentieren, die unsere Hilfe so dringend benötigen. </p>
      <p class="text"> Unser Ziel ist es, diesen unschuldigen Geschöpfen, den Hunger zu nehmen, deren <br> Schmerzen zu lindern und ihnen ein neues glücklicheres Leben zu schenken.  </p>
      <p class="text"> Mit deiner Unterstützung können wir gemeinsam wahre Wunder bewirken. Tauche ein <br> in unsere Projekte, spüre die Geschichten und werde ein Teil <br> unserer Fluffy Strays Familie, die für das Wohl der Straßentiere kämpft. </p>
      <p class="text"> Dein Beitrag bedeutet nicht nur Leben, sondern auch Liebe und Geborgenheit. <br> Gemeinsam schaffen wir eine Welt, in der die flauschigen Streuner ein glückliches <br> und gesundes Leben genießen können. </p>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/title/title.component.vue";
export default {
  name: "HomeView",
  components: {
    TitleComponent
  }
}
</script>

<style scoped>
#about-text-component{
  text-align: center;
}
.container{
  padding: var(--home-vertical-padding) 30px;
}
p{
  font-size: 16px;
}
p.slogan{
  display: flex;
  place-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 20px;
  font-family: Indie, sans-serif;
}

.text{
  max-width: 700px;
  margin: 40px auto;
}

img{
  height: 18px;
}
</style>