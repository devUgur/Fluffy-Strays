<template>
  <div id="about-video-banner">
    <div class="home-banner"></div>
    <div class="video">
      <video controls width="250">
        <source src="@/assets/videos/history2.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutVideoBanner",

}
</script>


<style scoped>
.video{
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -125px;
  padding: 0 30px;
}
video{
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #1f1f1f;;
}
</style>