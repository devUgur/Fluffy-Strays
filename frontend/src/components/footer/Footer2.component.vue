<template>
  <div id="footer-component">
    <div class="image">
      <div class="img-layout">
        <img src="@/assets/flaticons/img.png" alt="">
      </div>
    </div>
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
      <div class="right">
        <div class="newsletter">
          <h2>Abonniere Uns</h2>
          <p>um keine Geschichten, deiner Fluffy Strays zu verpassen...</p>
          <div class="input">
            <input type="text" placeholder="Email adresse">
            <button>Abonnieren</button>
          </div>
        </div>
      </div>
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
        <router-link to="">Cookie-Einstellung</router-link>
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
  margin-top: 100px;
  background: var(--color-palette-1-D);
  padding: 50px 50px;
  width: calc(100% - 100px);
}
.image{
  display: flex;
  justify-content: center;
}

.image img{
  height: 46px;
  width: 46px;
  object-fit: cover;
}

.img-layout{
  margin-top: -145px;
  width: 200px;
  height: 200px;
  background-color: #b7b7b7;
  /*border: 5px solid grey;*/
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  display: flex;
  place-items: center;
  justify-content: center;
}
.footer-section{
  border-bottom: 1px solid rgba(255, 255, 255, 0.51);
  padding: 30px;
}
.footer-section:last-of-type{
  border-bottom: none;
}

.footer-section.links{
  display: flex;
  place-items: center;
  flex-wrap: wrap;
}

.footer-section.links .left{
  flex: 1 1 400px;
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section.links .right{
  flex: 1 1 300px;
  width: 100%;
}

.footer-section.links .left .content{
  display: flex;
  flex-wrap: wrap;
}

.newsletter{
  display: flex;
  flex-direction: column;
  justify-content: center;

  place-items: center;
  text-align: center;
  border-radius: 25px;
  padding: 20px;
  color: white;
}


.newsletter p {
  font-weight: bold;
}
.newsletter a{
  color: var(--color-palette-1-A);
  text-decoration: underline;
}

.newsletter .input{
  margin-top: 20px;
  display: flex;
  gap: 20px;

}

.newsletter .input input{
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
}
.newsletter .input input:focus{
  outline: none !important;
}

.newsletter .input button{
  padding: 10px 20px;
  border: 2px solid white;
  background: transparent;
  color: white;
  font-weight: bold;
  border-radius: 5px;
}

.links .content{
  flex: 1 1 150px;

  display: flex;
  flex-direction: column;
  margin: 30px;
}

.footer-section.links .content {
  color: white;
}
a {
  color: white;
  text-decoration: none;
  margin-top: 7px;
}

a:hover {
  text-decoration: underline;
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
  flex-wrap: wrap;
}

.legal-links a{
  white-space: nowrap;
}

.legal-link-item{
  margin-right: 15px;
}
</style>