<template>
  <div id="about-text-component">
    <div class="container">
      <p class="text"> Hier schlagen unsere Herzen im Einklang mit den Straßentieren, <br> die unsere Hilfe so dringend benötigen. </p>
      <p class="text"> Unser Ziel ist es, diesen unschuldigen Geschöpfen, den Hunger zu nehmen, deren Schmerzen zu lindern und ihnen ein neues glücklicheres Leben zu schenken.  </p>
      <p class="text"> Mit deiner Unterstützung können wir gemeinsam wahre Wunder bewirken. Tauche ein in unsere Projekte, spüre die Geschichten und werde ein Teil unserer Fluffy Strays Familie, die für das Wohl der Straßentiere kämpft. </p>
      <p class="text"> Dein Beitrag bedeutet nicht nur Leben, sondern auch Liebe und Geborgenheit. Gemeinsam schaffen wir eine Welt, in der die flauschigen Streuner ein glückliches und gesundes Leben genießen können. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
}
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

.text{
  max-width: 700px;
  margin: 40px auto;
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