<template>
  <div id="fluffy-slides-component">
    <div class="fluffy-list">
      <div class="arrow prev" @click="prev"></div>
      <Flicking id="slide" ref="flicking" :options="flickingOptions" :plugins="plugins">
        <FluffySlideItemComponent
            class="card-panel"
            v-for="fluffy in fluffys" :fluffy="fluffy"
            :key="fluffy._id"
            :entered="mouseIsEnter"
            @mouseenter="mouseIsEnter = true"
            @mouseleave="mouseIsEnter = false"
        ></FluffySlideItemComponent>
      </Flicking>
      <div class="arrow next" @click="next"></div>
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
  data() {
    return {
      fluffys: Fluffys,
      mouseIsEnter: false,
      flickingOptions: {
        circularFallback: "bound",
        circular: true,
        //autoResize: true,
        align: "prev",
        autoInit: true,
        interruptable: false,
      },
      plugins: [
        new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false }),
      ],
    };
  },
  methods: {
    prev(){
      this.$refs.flicking.prev();
    },
    next(){
      this.$refs.flicking.next();
    },
  }
};
</script>

<style scoped>
@import "@egjs/flicking-plugins/dist/pagination.css";

.fluffy-list{
  display: flex;
  place-items: center;
  justify-content: center;
  background-color: #1f1f1f;
  padding: 50px 0;
}

#slide{
  max-width: 1200px;

}

.arrow{
  height: 30px;
  width: 30px;
  background-color: #f5511f;
}
</style>
