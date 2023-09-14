<template>
  <div id="footer-component">
    <div class="image">
      <div class="img-layout">
        <img src="@/assets/flaticons/img.png" alt="">
      </div>
    </div>
    <div class="container">
      <div class="content top">
        <div class="item social">
          <h2> Folgst du uns schon ?</h2>
          <div class="list">
            <div class="list-item">
              <img src="@/assets/flaticons/img.png" alt="">
              <h3> Youtube </h3>
            </div>
            <div class="list-item">
              <img src="@/assets/flaticons/img.png" alt="">
              <h3> Instagram </h3>
            </div>
            <div class="list-item">
              <img src="@/assets/flaticons/img.png" alt="">
              <h3> Pinterest </h3>
            </div>
            <div class="list-item">
              <img src="@/assets/flaticons/img.png" alt="">
              <h3> Facebook </h3>
            </div>
            <div class="list-item">
              <img src="@/assets/flaticons/img.png" alt="">
              <h3> TikTok </h3>
            </div>
          </div>
        </div>
        <div class="item newsletter">
          <h2> Verpasse keine neuen Geschichten deiner Fluffy Strays mehr ...</h2>
          <button>NEWSLETTER ABONNIEREN</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis excepturi ipsam perspiciatis
            provident quis similique. A ad debitis ducimus facere, fuga officiis quam totam voluptatum. Aliquid
            asperiores dolore dolorem error minima perferendis ratione rerum tenetur voluptate voluptatem. Accusantium
            animi debitis dicta maxime perferendis? A accusantium consectetur consequatur cum debitis ea facilis
            molestiae nulla, obcaecati odit officia, porro quas quasi qui, quia quo sint sit soluta vel voluptatibus.
            Aperiam at aut dolor, libero nostrum perferendis repellendus velit. Amet atque consectetur deserunt dolores
            ducimus eligendi et excepturi harum ipsam, laboriosam nemo, odit possimus quas quia quo, rem repudiandae
            rerum sed ut.
          </p>
        </div>
      </div>
      <div class="content bottom">
        <button> Affiliate Partnerprogramm </button>
        <button> Dir gefällt die Webseite und du möchtest auch so eine ? </button>
        <button> Impressum </button>
        <button> Datenschutz </button>
      </div>
    </div>
    <!--
    <ContactFormularComponent></ContactFormularComponent>
    -->
  </div>
</template>

<script>
import ContactFormularComponent from "@/components/contact/ContactFormular.component.vue";
export default {
  name: "FooterComponent",
  components: {
    ContactFormularComponent
  }
}
</script>

<style scoped>
#footer-component{
  display: flex;
  flex-direction: column;
  min-height: 400px;
  height: 100%;
  background-color: var(--primary-color);
}
.image{
  display: flex;
  justify-content: center;
}

img{
  height: 46px;
  width: 46px;
  object-fit: cover;
}

.img-layout{
  margin-top: -105px;
  width: 200px;
  height: 200px;
  background-color: #b7b7b7;
  /*border: 5px solid grey;*/
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  display: flex;
  place-items: center;
  justify-content: center;
}

.container{
  max-width: 1200px;
  width: calc(100% - 200px);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  justify-content: center;
}

.content.top{
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: center;

}

.content.top .item{
  width: 100%;
  padding: 50px 30px;
  background-color: lightgrey;
  border: 2px solid #1f1f1f;
  flex: 1 1 300px;
  /*max-width: 400px;*/
}

h2{
  margin: 0 auto;
  text-align: center;
  max-width: 400px;
}

.social .list{
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 20px;
  margin-top: 40px;
}

.social .list-item{
  display: flex;
  place-items: center;
  gap: 40px;
  max-width: 200px;
  width: 100%;
}

.social img{
  border-radius: 50%;
}

.item.newsletter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.newsletter button{
  background-color: orange;
  color: white;
  padding: 20px 10px;
  font-weight: bold;
  border: 2px solid black;
  font-size: 18px;
}

.content.bottom{
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px 0;
}

.content.bottom button{
  background-color: orange;
  color: white;
  padding: 20px 10px;
  font-weight: bold;
  border: 2px solid black;
  font-size: 18px;
}

@media (max-width: 768px) {
  #footer-component .container{
      max-width: 1200px;
      width: calc(100% - 60px);
      margin: 50px auto;
      display: flex;
  }
}
</style>