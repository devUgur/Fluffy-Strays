<template>
  <div id="our-fluffys-component">
    <div class="container">
      <div class="title">
        <h1>unsere Fluffys</h1>
        <p>Wähle dein Liebling</p>
      </div>
      <div class="fluffy-list home-banner">
        <div class="list-item"
             v-for="fluffy in fluffys"
             :key="fluffy.imgName"
             @mouseenter="mouseIsEnter = true"
             @mouseleave="mouseIsEnter = false"
             @click="toFluffy(fluffy._id)"
        >
          <div class="image">
            <img :src="require(`@/assets/canva/animals/${fluffy.imgName}`)" alt="Fluffy Image">
            <div class="blur" :class="{'active': mouseIsEnter}"></div>
          </div>
          <div class="name">{{fluffy.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fluffys from "@/objects/Fluffys.json"
export default {
  name: "OurFluffysComponent",
  data() {
    return {
      mouseIsEnter: false,
      fluffys: Fluffys
    };
  },
  methods: {
    toFluffy(id){
      console.log(id)
      this.$router.push('/fluffy/'+id);
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  padding-bottom: 50px;
}
.container {
  padding-bottom: var(--home-vertical-padding);
}
p {
  font-weight: bold;
  font-size: 20px;
  font-family: Indie, sans-serif;
}

.fluffy-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
  gap: 20px;
  padding: 30px 0;
}

.fluffy-list .list-item{
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-items: center;
  cursor: pointer;
}

.fluffy-list .list-item .image {
  position: relative;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  place-items: center;
  justify-content: center;
  padding: 5px;
}
.fluffy-list .list-item .image img{
  transition: transform 0.5s ease-in-out;
}
.fluffy-list .list-item .image .blur{
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background-color: rgba(8, 14, 14, 0.15);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.fluffy-list .list-item .image .blur.active{
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(3px);
  opacity: 1;
}

.fluffy-list .list-item:hover .image .blur.active{
  opacity: 0;
}

.fluffy-list .list-item:hover .name{
  text-decoration: underline;

}
.fluffy-list .list-item:hover .image img{
  transform: scale(1.09);
}

.fluffy-list .list-item img{
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

.fluffy-list .list-item .name{
  margin-top: 10px;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-family: Titan, sans-serif;
  color: white;
}
</style>
