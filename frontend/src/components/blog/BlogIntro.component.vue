<template>
  <div id="blog-intro-component">
    <div class="layout">
      <div class="image">
        <div class="image-layout">
          <img src="@/assets/canva/background01.jpg" alt="">
          <img src="@/assets/canva/background02.jpg" alt="">
        </div>
      </div>
      <div class="title">
        <div class="name">Fluffy Strays Blog´s</div>
        <p class="slogan">Hilf uns zu Helfen</p>
      </div>
      <div class="text-layout">
        <div class="text blur">
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
    </div>
  </div>
</template>

<script>
import BlogIntroTextComponent from "@/components/blog/BlogIntroText.component.vue";
export default {
  name: "BlogIntroComponent",
  components: {
    BlogIntroTextComponent
  },
  data() {
    return {
      intervalTimer: null,
    };
  },
  methods: {
    toggleClass() {
      let images = document.querySelectorAll('#blog-intro-component .image-layout img');
      for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active')) {
          images[i].classList.remove('active');
        } else {
          images[i].classList.add('active');
        }
      }
    },
  },
  mounted() {
    setTimeout(() => {
      let firstImg = document.querySelectorAll('#blog-intro-component .image-layout img')[0];
      firstImg.classList.add('active');
    }, 10);
    this.intervalTimer = setInterval(this.toggleClass, 7000); // Alle 7 Sekunden aufrufen
  },
  beforeUnmount() {
    clearInterval(this.intervalTimer); // clearInterval verwenden, um das Intervall zu löschen
  },
}
</script>

<style scoped>
#blog-intro-component{

  height: calc(100vh - 100px);
  margin-bottom: 200px;
}
.layout{
  position: relative;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  place-items: center;
  margin-bottom: 300px;
}
.image-layout {
  position: relative;
  height: calc(100vh - 100px);
  overflow: hidden;
}
.image{
  position: absolute;
  left: 0; top: 0;
  right: 0; bottom: 0;
  max-height: calc(80vh - 100px);
  z-index: -1;
}
img {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s, transform 7s;
  transform: scale(1);
}

.active {
  opacity: 1;
  transform: scale(1.1); /* Zoom auf 1.1x */
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
  padding: 10px;
  color: white;
}

p.slogan{
  font-size: 22px;
  color: white;
}

@media (max-width: 768px) {
  .title .name{
    font-size: 48px;
  }
}

.text{
  position: relative;
  background-color: rgba(183, 183, 183, 0.38);
  margin: 0 20px -100px;
  padding: 15px;

}

.text h5, p{
  color: white;
  text-align: center;
}

.text h5{
  font-size: 22px;
  margin-bottom: 15px;
}

.text-layout{
  position: absolute;
  max-width: 900px;
  width: 100%;
  bottom: 0;
}

@media (max-width: 768px) {
  .text{
    margin: 0 20px -200px;
  }
}
</style>