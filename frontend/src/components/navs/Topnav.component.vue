<template>
  <div id="topnav-component">
    <div class="logo">
      <div class="logo-text">
        <h1>Fluffy Strays</h1>
        <div class="slogan">Hilf uns zu Helfen</div>
        <img src="@/assets/canva/logo01.png" alt="">
      </div>
    </div>
    <div class="content">
      <div class="navs">
        <nav>
          <div class="link" v-for="(link, index) in links" :key="link.to">
            <router-link to="/">Menü {{index+1}}</router-link>
          </div>
        </nav>
        <div class="options">
          <select class="language">
            <option>Deutsch</option>
            <option>Englisch</option>
            <option>Türkisch</option>
          </select>
        </div>
      </div>
      <div class="donation">
        <button class="donate">
          <span>Jetzt spenden</span>
          <img src="@/assets/flaticons/heart-white.png" alt="">
        </button>
        <button class="partnership">
          <span>Pate werden</span>
          <img src="@/assets/flaticons/right-arrow-white.png" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopnavComponent",
  data(){
    return {
      links: [
        { name: "Menu", to: "/"},
        { name: "Menu", to: "/"},
        { name: "Menu", to: "/"},
        { name: "Menu", to: "/"},
        { name: "Menu", to: "/"},
      ]
    }
  }
}
</script>

<style scoped>
#topnav-component{
  height: 150px;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
}

.logo{
  max-width: 200px;
  width: 100%;
  position: relative;
  z-index: 10;
}

.logo .slogan{
  font-size: 14px;
  font-weight: bold;
}

.logo img{
  position: absolute;
  right: calc(-50%);
  border: 0;
  height: 200px;
  border-radius: 50%;
}

.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.navs{
  display: flex;
  width: 100%;
}
nav{
  margin: 0 auto;
}

.donation{
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  gap: 15px;
}

button{
  max-width: 220px;
  padding: 10px 40px;
  width: 100%;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  display: flex;
  place-items: center;
  gap: 15px;
  white-space: nowrap;
  justify-content: center;
}

button img{
  height: 22px;
}

button.donate{
  background-color: orangered;
}
button.partnership{
  background-color: cornflowerblue;
}

nav {
  display: flex;
  gap: 35px;
}

nav a {
  font-size: 18px;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgba(29, 29, 30, 0.79);
}

@media (max-width: 768px) {
  .content{
    display: none;
  }

  .logo img{
    right: 0;
  }
}
</style>