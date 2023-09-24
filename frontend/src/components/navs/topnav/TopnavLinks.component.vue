<template>
  <div id="topnav-links-component">
    <div class="navs">
      <nav v-show="!collapsed">
        <div class="link" v-for="(link, index) in links" :key="link.to">
          <router-link :title="link.tooltip || ''" :to="link.to">
            <div>{{link.name}}</div>
            <img src="@/assets/flaticons/pet-color-1-A.png" alt="">
            <img src="@/assets/flaticons/pet-color-1-A.png" alt="">
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sticky', 'collapsed'],
  name: "TopnavLinksComponent",
  computed: {
    links(){
      return this.$store.getters['topnav/links'];
    },
  }
}
</script>

<style scoped>
.navs{
  display: flex;
  width: 100%;
}

nav {
  display: flex;
  gap: 35px;
  margin: 0 auto;

}

nav a {
  font-size: 20px;
  color: var(--color-palette-1-D);
  text-decoration: none;
  display: flex;
  place-items: center;
  justify-content: center;
  font-weight: bold;
}

nav a :hover{
  /*color: var(--color-palette-1-A);*/
}

nav a.router-link-exact-active {
  color: var(--color-palette-1-A);
}

nav a:hover img{
  opacity: 0.3;
}

nav a img{
  opacity: 0;
  transition: opacity 0.7s;
  position: absolute;
  height: 42px;
  z-index: -1;
}

@media (max-width: 1024px) {
  .navs{
    display: none;
  }
}
</style>