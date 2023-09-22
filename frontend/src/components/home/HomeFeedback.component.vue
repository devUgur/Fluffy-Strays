<template>
  <div id="home-feedback-component">
    <div class="container">
      <div class="title">
        <TitleComponent :title="'Es ist mir eine Ehre <br> unsere Helden zu präsentieren'"></TitleComponent>
        <!--<h1>Das sagen unsere Unterstützer</h1>-->
      </div>
      <div class="slides">
        <Flicking class="content" :options="flickingOptions" :plugins="plugins">
          <div class="card-panel" v-for="(slide, index) in slides" :key="index">
           <div class="slide">
             <div class="item profile">
              <img src="@/assets/flaticons/default_user.png" alt="">
             </div>
             <div class="item comment">
               <p>{{slide.text}}</p>
             </div>
             <div class="item to">
               <router-link to="">Sei auch du dabei!</router-link>
             </div>
           </div>
          </div>
          <template #viewport>
            <div class="flicking-pagination"></div>
          </template>
          <!--
          <template #viewport>
            <div class="slide">
              <span class="flicking-arrow-prev"></span>
              <span class="flicking-arrow-next"></span>
            </div>
          </template>
          -->
        </Flicking>
      </div>
      <div class="title">
        <h2>Dank eurer finanziellen Unterstützung
          können wir so viel Bewegen</h2>
      </div>
    </div>
  </div>
</template>



<script>
import TitleComponent from "@/components/title/title.component.vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking-plugins/dist/pagination.css";
import { Pagination } from "@egjs/flicking-plugins";
import { Arrow } from "@egjs/flicking-plugins";
import { AutoPlay } from "@egjs/flicking-plugins";
import { Perspective } from "@egjs/flicking-plugins";
export default {
  name: "HomeFeedbackComponent",
  components: {
    TitleComponent,
    Flicking: Flicking,
  },
  data(){
    return {
      plugins: [
        //new Arrow(),
        new Pagination({ type: 'bullet' }),
        new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false }),
        new Perspective({ rotate: -0.8, scale: 2, perspective: 600 })
      ],
      flickingOptions: {
        align: "center",
        circular: true, // Aktiviere den endlosen Schleifenmodus
        autoResize: true,
        adaptive: true,
        //horizontal:true,
      },
      slides: [
        {
          name: "Ugur Özdamar",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
        },
        {
          name: "",
          text: "Accusamus adipisci cum deleniti deserunt, doloremque, enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
        },
        {
          name: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
        },
        {
          name: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci cum deleniti deserunt, doloremque, enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
        },
        {
          name: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci cum deleniti deserunt, doloremque, enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
        },
        {
          name: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci cum deleniti deserunt, doloremque, enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
        },
      ]
    }
  }
}
</script>

<style scoped>
@import "@egjs/flicking-plugins/dist/pagination.css";
@import url("../../../node_modules/@egjs/vue3-flicking/dist/flicking.css");
@import url("../../../node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");
.container {
  padding: var(--home-vertical-padding) 30px;
}

.title {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.slides{
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
}

.slides .content{
  padding-bottom: 50px;

}
.card-panel{
  background-color: white;
  max-width: 420px;
  width: calc(100% - 40px);
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  transition: box-shadow 0.5s;
  padding: 30px;
}

.card-panel:hover{
  box-shadow: none;
}

.slide{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.slide .item{
  margin-top: 15px;
}

.profile{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profile img{
  height: 82px;
  background-color: var(--color-palette-1-D);
  border-radius: 50%;
  margin: 0 auto;
}

.flicking-pagination{
  bottom: 0;
}

.item.to a{
  color: var(--color-palette-1-D);
}
</style>

<style>
.flicking-pagination span{
  height: 8px !important;
  width: 8px !important;
  border: 2px solid white;
  padding: 2px;
}

.flicking-pagination-bullet-active{
  background-color: var(--color-palette-1-D);
}
</style>