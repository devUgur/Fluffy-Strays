<template>
  <div id="fluffy-slides-component" ref="fluffy-list">
    <div class="fluffy-list" v-if="fluffys && fluffys.length > 0">
      <div class="arrow prev" @click="prev" v-if="hasMaxSize">
        <img src="@/assets/flaticons/right-arrow-thin-white.png">
      </div>
      <Flicking
          id="slide"
          ref="flicking"
          :options="flickingOptions"
          :plugins="flickingPlungins"
      >
        <FluffySlideItemComponent
            class="card-panel"
            v-for="fluffy in fluffys" :fluffy="fluffy"
            :key="fluffy._id"
            :entered="mouseIsEnter"
            @mouseenter="mouseIsEnter = true"
            @mouseleave="mouseIsEnter = false"
        ></FluffySlideItemComponent>
      </Flicking>
      <div class="arrow next" @click="next"  v-if="hasMaxSize">
        <img src="@/assets/flaticons/right-arrow-thin-white.png">
      </div>
    </div>
  </div>
</template>

<script>
import Fluffys from "@/objects/Fluffys.json"
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import { AutoPlay } from "@egjs/flicking-plugins";

import FluffySlideItemComponent from "@/components/fluffy/FluffySlideItem.component.vue";

export default {
  name: "OurFluffysComponent",
  components: {
    Flicking,
    FluffySlideItemComponent,
  },
  computed: {
    fluffys(){
      let storedFluffys = this.$store.getters['fluffy/list'];
      if(storedFluffys && storedFluffys.length > 0){
        return this.$store.getters['fluffy/list'];
      }
      return Fluffys;
    },
    hasMaxSize(){
      return this.fluffys.length > 10
    },
    flickingPlungins(){
      if(this.hasMaxSize) {
        return [new AutoPlay({duration: 2000, direction: "NEXT", stopOnHover: true})];
      }
      return [];
    }
  },
  data() {
    return {
      //fluffys: Fluffys,
      mouseIsEnter: false,
      flickingOptions: {
        //circularFallback: "move",
        //circular: true,
        //autoResize: true,
        //align: "center",
        //autoInit: true,
        //interruptable: false,
        //duration: 500,
        deceleration: 0.0005,
        circularFallback: "bound",
        circular: true,
        align: "center"
      },
      plugins: [],
      listener: null,
    };
  },
  methods: {
    prev(){
      this.$refs.flicking.prev();
    },
    next(){
      this.$refs.flicking.next();
    },
    slidingHandler(e){
      this.mouseIsEnter = false;
    },
    async loadFluffys(){
      await this.$store.dispatch('fluffy/getList');
    },
    async onInit(){
      try {
        await this.loadFluffys();
        this.listener = this.$refs["fluffy-list"].addEventListener('mousedown', this.slidingHandler);
      }catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.onInit();
  },
  watch: {
    flickingOptions(newVal){
      if (newPlugins !== oldPlugins) {
        console.log("ARDEY")
        this.$refs.flicking.updatePlugins(newPlugins);
      }
    }
  }
};
</script>

<style>

</style>

<style scoped>
@import "@egjs/flicking-plugins/dist/pagination.css";

.fluffy-list{
  background-color: var(--color-palette-1-D);
  padding: 50px 0;
  border-bottom: 5px solid white;

}

#slide{

}

.arrow{
  height: 30px;
  width: 30px;
  cursor: pointer;
  padding: 10px;
}

.arrow img{
  height: 100%;
}

.arrow.prev img{
  transform: rotate(180deg);
}
</style>
