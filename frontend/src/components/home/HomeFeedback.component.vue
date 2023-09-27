<template>
  <div id="home-feedback-component">
    <div class="container">
      <div class="title">
        <TitleComponent :title="'Es ist uns eine Ehre <br> unsere Helden zu präsentieren'"></TitleComponent>
        <!--<h1>Das sagen unsere Unterstützer</h1>-->
      </div>
      <div class="slides">
        <Flicking class="content" :options="flickingOptions" :plugins="plugins">
          <div class="card-panel"
               v-for="(slide, index) in slides"
               :key="index"
               @mouseenter="slide.hovered = true"
               @mouseleave="slide.hovered = false"
          >
           <div class="slide">
             <div class="item profile">
              <img src="@/assets/flaticons/default_user.png" alt="">
             </div>
             <div class="item comment">
               <p>{{slide.text}}</p>
             </div>
             <div class="item to">
               <transition name="slide-fade">
                 <div class="blog-route" v-show="slide.hovered">
                   <router-link to="">
                     <div>weiterlesen</div>
                     <img src="@/assets/flaticons/next-color-1-A.png" alt="">
                   </router-link>
                 </div>
               </transition>
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
          können wir so viel bewegen</h2>
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
          hovered: false,
        },
        {
          name: "",
          text: "Accusamus adipisci cum deleniti deserunt, doloremque, enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
          hovered: false,
        },
        {
          name: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
          hovered: false,
        },
        {
          name: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci cum deleniti deserunt, doloremque, enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
          hovered: false,
        },
        {
          name: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci cum deleniti deserunt, doloremque, enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
          hovered: false,
        },
        {
          name: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci cum deleniti deserunt, doloremque, enim esse fugit, ipsa iusto laboriosam molestiae nihil omnis qui sapiente tempora tenetur veritatis! Asperiores cum, cumque dolore ea eveniet ex excepturi possimus provident repellat repellendus!",
          hovered: false,
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

.title:last-of-type{
  margin: 50px auto;
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
  /*box-shadow: none;*/
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

a{
  display: flex;
  place-items: center;
  text-decoration: none;
  color: var(--color-palette-1-D);
}

a:hover{
  text-decoration: underline;
}

a img{
  height: 16px;
  margin-left: 5px;
  transition: all 0.5s;
}

.item.to{
  height: 20px;
}

.slide-fade-enter-active {
  /*transition: all 0.3s ease-out;*/
  /*transition: all 0.3s ease-out;*/
}

.slide-fade-leave-active {
  /*ransition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);*/
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.blog-route{
  transition: all 0.3s ease-out;
}

.blog-route a {
  height: 16px;
  margin-left: 5px;
  transition: all 0.3s;
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