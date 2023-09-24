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
  box-shadow: var(--box-shadow-palette-1-A);
  background-color: #1f1f1f;;
}
</style>