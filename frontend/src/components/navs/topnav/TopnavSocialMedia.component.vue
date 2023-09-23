<template>
  <div id="topnav-social-media-component">
    <div class="layout" v-show="!sticky">
      <div class="item"
           v-for="icon in socialIcons"
           @mouseenter="icon.hovered = true"
           @mouseleave="icon.hovered = false">
        <transition name="bounce" mode="out-in">
          <img v-if="!icon.hovered" :src="require(`@/assets/flaticons/social/${icon.primary}.png`)" alt="">
          <img :title="icon.name" v-else :src="require(`@/assets/flaticons/social/${icon.color}.png`)" alt="">
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sticky', 'collapsed'],
  name: "",
  methods: {
    getImgUrl(url) {
      let images = require.context(url, false, /\.png$/)
      return images('./' + pet + ".png")
    }
  },
  data(){
    return {
      socialIcons: [
        {
          hovered: false,
          name: "Youtube",
          primary: "youtube-primary",
          color: "youtube-color-1-A"
        },
        {
          hovered: false,
          name: "Instagram",
          primary: "instagram-primary",
          color: "instagram-color-1-A"
        },
        {
          hovered: false,
          name: "Pinterest",
          primary: "pinterest-primary",
          color: "pinterest-color-1-A"
        },
        {
          hovered: false,
          name: "Facebook",
          primary: "facebook-primary",
          color: "facebook-color-1-A"
        },
        {
          hovered: false,
          name: "TikTok",
          primary: "tiktok-primary",
          color: "tiktok-color-1-A"
        },
      ]
    }
  },
}
</script>

<style scoped>
#topnav-social-media-component{
  display: flex;
  justify-content: right;
}

.layout{
  display: flex;
  place-items: center;
  gap: 10px;
}

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
}

.item:hover{
  cursor: pointer;
}

.item:hover img{
  /*transform: scale(1.1);*/
  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/

}

@media (max-width: 1200px) {
  .layout{
    display: none;
  }
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