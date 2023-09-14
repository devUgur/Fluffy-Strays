<template>
  <div id="blog-intro-text-component">
    <div class="title">
      <div class="name">Fluffy Strays Blog´s</div>
      <p class="slogan">Hilf uns zu Helfen</p>
    </div>
    <div class="text">
      <h5>Herzlich Willkommen im Fluffy Strays Blog</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consequuntur dolor ea enim et
        expedita illo, ipsam maiores nesciunt optio perspiciatis quidem quod quos rerum sit soluta. At consequuntur
        debitis dolores eos, magnam quae qui quisquam ratione soluta, tempore ut vitae. Accusamus architecto aspernatur
        atque commodi cum cumque dolor dolorum expedita, explicabo harum inventore iusto mollitia nam nisi nulla
        officiis porro quaerat, quas qui quos recusandae rem repudiandae rerum, ullam unde vel voluptate. Amet
        asperiores at, enim, esse labore laudantium nam natus, obcaecati odio placeat quidem quod rem repellat saepe
        sapiente sit voluptatibus? Ad eum ipsam labore molestiae voluptas.
      </p>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
export default {
  name: "BlogIntroTextComponent",

}

</script>


<style scoped>
#blog-intro-text-component{
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: end;
  height: calc(80vh - 50px);
  color: rgba(29, 29, 30, 0.79);
}

.title{
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  place-items: center;
}
.title .name{
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  background-color: whitesmoke;
  padding: 10px;
}
.text{
  max-width: 900px;
  padding: 25px;
  background-color: rgba(183, 183, 183, 0.38);
}
.text h5{
  font-size: 22px;
  margin-bottom: 15px;
}
.text h5, p{
  text-align: center;
}

p.slogan{
  margin-top: 20px;
  font-size: 22px;
  background-color: whitesmoke;
  padding: 10px;
}
</style>