<template>
  <div id="fluffy-slide-item-component">
    <div class="list-item"
         :key="fluffy.imgName"
         @click="toFluffy(fluffy._id)"
    >
      <div class="image">
        <img :src="require(`@/assets/canva/animals/${fluffy.imgName}`)" alt="Fluffy Image">
        <div class="blur" :class="{'active': entered}"></div>
      </div>
      <div class="name">{{fluffy.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FluffySlideItemComponent",
  props: ['fluffy', 'entered'],
  data(){
    return {
    }
  },
  methods: {
    toFluffy(id){
      const url = '/fluffys/' + id;
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>

.list-item{
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-items: center;
  cursor: pointer;
}

.list-item .image {
  position: relative;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  place-items: center;
  justify-content: center;
  padding: 5px;
}
.list-item .image img{
  transition: transform 0.5s ease-in-out;
}
.list-item .image .blur{
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background-color: rgba(8, 14, 14, 0.15);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.list-item .image .blur.active{
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(3px);
  opacity: 1;
}

.list-item:hover .image .blur.active{
  opacity: 0;
}

.list-item:hover .name{
  text-decoration: underline;

}
.list-item:hover .image img{
  transform: scale(1.09);
}

.list-item img{
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

.list-item .name{
  margin-top: 10px;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-family: Titan, sans-serif;
  color: white;
}
</style>