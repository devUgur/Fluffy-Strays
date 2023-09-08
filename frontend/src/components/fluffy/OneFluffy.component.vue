<template>
  <div id="one-fluffy-component">
    <div class="container">
      <div class="content" v-if="fluffy">
        <div class="left">
          <div class="title">
            <div class="properties">{{fluffy.special_properties}}</div>
            <h1 class="name">{{fluffy.name}}</h1>
          </div>
          <div class="story">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate, id ipsum laudantium
              mollitia necessitatibus nostrum nulla possimus quas quasi qui quibusdam quos ratione repellat repellendus
              reprehenderit sequi, voluptate voluptatum. Aliquam cupiditate, distinctio enim eveniet laborum neque quos
              soluta velit. Delectus dolorum eaque facilis molestias quibusdam! Ad atque blanditiis commodi culpa dolorum
              earum hic iure, molestias obcaecati, omnis quia quo quos repellat sint ullam unde vel! Alias aspernatur
              assumenda at consectetur consequuntur culpa dignissimos distinctio, earum eos fugiat fugit illo illum iure
              laudantium libero odio optio, pariatur porro quis, quod quos recusandae repellat vel? Aut ea eligendi
              inventore numquam quasi!
            </p>
          </div>
          <div class="donation">
            <FoodDonationBtnComponent></FoodDonationBtnComponent>
            <BecomeGodfatherBtnComponent></BecomeGodfatherBtnComponent>
          </div>
        </div>
        <div class="right">
          <div class="image">
            <img :src="require(`@/assets/canva/animals/${fluffy.imgName}`)" alt="Fluffy Image">
          </div>
        </div>
      </div>
      <div class="galerie">
        <FluffyGalerieComponent :fluffy="fluffy"></FluffyGalerieComponent>
      </div>
    </div>
    <div class="about">
      <div class="home-banner banner"></div>
      <div class="video">
        <video controls width="250">
          <source src="@/assets/videos/history2.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="donation">
        <FoodDonationBtnComponent></FoodDonationBtnComponent>
        <BecomeGodfatherBtnComponent></BecomeGodfatherBtnComponent>
      </div>
      <HomeFluffysComponent></HomeFluffysComponent>
      <HomeOurSuccessComponent></HomeOurSuccessComponent>
    </div>
  </div>
</template>

<script>
import Fluffys from "@/objects/Fluffys.json";
import FoodDonationBtnComponent from "@/components/buttons/FoodDonationBtn.component.vue";
import BecomeGodfatherBtnComponent from "@/components/buttons/BecomeGodfatherBtn.component.vue";
import FluffyGalerieComponent from "@/components/fluffy/FluffyGalerie.component.vue";
import HomeFluffysComponent from "@/components/home/HomeFluffys.component.vue";
import HomeOurSuccessComponent from "@/components/home/HomeOurSuccess.component.vue";
export default {
  name: "OneFluffyComponent",
  components: {
    FoodDonationBtnComponent,
    BecomeGodfatherBtnComponent,
    FluffyGalerieComponent,
    HomeFluffysComponent,
    HomeOurSuccessComponent

  },
  computed: {
    fluffy(){
      return Fluffys.find(fluffy => fluffy._id === this.$route.params.id);
    }
  },
}
</script>

<style scoped>
.container{
  min-height: 100vh;
  padding: var(--home-vertical-padding) 0;
  max-width: 1245px;
  margin: 0 auto;
}
.content{
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 30px;
}

.content .left{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content .left .story{
  max-width: 600px;
}

.donation{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.content .right{
  display: flex;
  justify-content: center;
  flex: 1 1 300px;
}

.content .right .image{
  max-width: 300px;
}

.content .right .image img{
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  border: 10px solid white;
}
.banner{

}

.video {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -125px;

}

video{
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.about .donation{
  padding: var(--home-vertical-padding) 0;
  justify-content: center;
}
</style>