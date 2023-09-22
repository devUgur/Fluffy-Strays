<template>
  <div id="footer-component">
    <div class="footer-section links">
      <div class="left">
        <div class="content">
          <h4>Keywords</h4>
          <router-link to="/">keywords</router-link>
          <router-link to="/">keywords</router-link>
          <router-link to="/">keywords</router-link>
        </div>
        <div class="content">
          <h4>Keywords</h4>
          <router-link to="/">keywords</router-link>
          <router-link to="/">keywords</router-link>
          <router-link to="/">keywords</router-link>
        </div>
        <div class="content">
          <h4>Keywords</h4>
          <router-link to="/">keywords</router-link>
          <router-link to="/">keywords</router-link>
          <router-link to="/">keywords</router-link>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="footer-section social-links">
      <div class="social-link-item">
        <img src="@/assets/flaticons/social/youtube-white.png" alt="">
      </div>
      <div class="social-link-item">
        <img src="@/assets/flaticons/social/instagram-white.png" alt="">
      </div>
      <div class="social-link-item">
        <img src="@/assets/flaticons/social/pinterest-white.png" alt="">
      </div>
      <div class="social-link-item">
        <img src="@/assets/flaticons/social/facebook-white.png" alt="">
      </div>
      <div class="social-link-item">
        <img src="@/assets/flaticons/social/tiktok-white.png" alt="">
      </div>
    </div>
    <div class="footer-section legal-links">
      <div class="legal-link-item">
        <router-link to="">Impressum</router-link>
      </div>
      <div class="legal-link-item">
        <router-link to="">Datenschutz</router-link>
      </div>
      <div class="legal-link-item">
        <router-link to="">Cookie- Einstellung</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",

}
</script>

<style scoped>
#footer-component{
  background: var(--color-palette-1-D);
  padding: 50px 50px;
  width: calc(100% - 100px);
}

.footer-section{
  border-bottom: 1px solid rgba(255, 255, 255, 0.51);
  padding: 40px 0;
}
.footer-section:last-of-type{
  border-bottom: none;
}

.footer-section.links{
  display: flex;
}

.footer-section.links .left{
  display: flex;
}

.links .content{
  display: flex;
  flex-direction: column;
  margin-right: 30px;
}

.footer-section.links .content {
  color: white;
}
a {
  color: white;
  text-decoration: none;
  margin-top: 7px;
}

.social-links{
  display: flex;
}
.social-link-item{
  margin-right: 15px;
}
.social-link-item img{
  height: 36px;
}

.legal-links{
  display: flex;
}

.legal-link-item{
  margin-right: 15px;
}
</style>