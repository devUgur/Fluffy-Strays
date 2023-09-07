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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate, id ipsum laudantium
              mollitia necessitatibus nostrum nulla possimus quas quasi qui quibusdam quos ratione repellat repellendus
              reprehenderit sequi, voluptate voluptatum. Aliquam cupiditate, distinctio enim eveniet laborum neque quos
              soluta velit. Delectus dolorum eaque facilis molestias quibusdam! Ad atque blanditiis commodi culpa dolorum
              earum hic iure, molestias obcaecati, omnis quia quo quos repellat sint ullam unde vel! Alias aspernatur
              assumenda at consectetur consequuntur culpa dignissimos distinctio, earum eos fugiat fugit illo illum iure
              laudantium libero odio optio, pariatur porro quis, quod quos recusandae repellat vel? Aut ea eligendi
              inventore numquam quasi!</p>
          </div>
          <div class="donation">
            <button class="food-donation">eine Futterspende</button>
            <button class="food-donation">dauerhaft helfen, werde Pate</button>
          </div>
        </div>
        <div class="right">
          <div class="image">
            <img :src="require(`@/assets/canva/animals/${fluffy.imgName}`)" alt="Fluffy Image">
          </div>
        </div>
      </div>
      {{ fluffy }}
    </div>
  </div>
</template>

<script>
import Fluffys from "@/objects/Fluffys.json";

export default {
  name: "OneFluffyComponent",
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
  gap: 30px;
}
</style>