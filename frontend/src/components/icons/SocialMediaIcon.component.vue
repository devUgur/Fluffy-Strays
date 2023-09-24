<template>
  <div id="social-media-icon-component">
    <div class="item"
         @mouseenter="icon.hovered = true"
         @mouseleave="icon.hovered = false"
         @click="openSocialPage(icon.url)"
    >
      <transition name="bounce" mode="out-in">
        <img v-if="!icon.hovered" :src="require(`@/assets/flaticons/social/${passiveIcon}.png`)" alt="">
        <img :title="icon.name" v-else :src="require(`@/assets/flaticons/social/${activeIcon}.png`)" alt="">
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMediaIconComponent",
  props: ['icon', 'passiveIcon', 'activeIcon'],
  methods: {
    openSocialPage(url){
      if(url){
        window.open(url, '_blank');
      }
    }
  }
}
</script>

<style scoped>
.item{
  position: relative;
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 38px;
  width: 38px;
}

img{
  position: absolute;
  height: 38px;
  border-radius: 50%;
  transition: all 0.3s;
  box-shadow: var(--box-shadow-palette-1-A);
}

.item:hover{
  cursor: pointer;
}

.item:hover img{
  /*transform: scale(1.1);*/
  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/

}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>