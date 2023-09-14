<template>
  <div id="topnav-social-media-component">
    <div class="layout" v-show="!sticky">
      <div class="item">
        <img src="@/assets/flaticons/social/youtube.png" alt="">
      </div>
      <div class="item">
        <img src="@/assets/flaticons/social/instagram.png" alt="">
      </div>
      <div class="item">
        <img src="@/assets/flaticons/social/pinterest.png" alt="">
      </div>
      <div class="item">
        <img src="@/assets/flaticons/social/facebook.png" alt="">
      </div>
      <div class="item">
        <img src="@/assets/flaticons/social/tik-tok.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sticky', 'collapsed'],
  name: ""
}
</script>

<style scoped>
#topnav-social-media-component{
  display: flex;
  justify-content: right;
}

.layout{
  display: flex;
  gap: 10px;
}

img{
  height: 32px;
}

.item:hover{
  cursor: pointer;
}

@media (max-width: 1200px) {
  .layout{
    display: none;
  }
}


</style>