<template>
  <div id="">
    <div class="navs">
      <nav v-show="!collapsed">
        <div class="link" v-for="(link, index) in links" :key="link.to">
          <router-link to="/">{{link.name}}</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sticky', 'collapsed'],
  name: "TopnavLinksComponent",
  data(){
    return{
      links: [
        { name: "Home", to: "/"},
        { name: "Fluffys", to: "/"},
        { name: "Blog", to: "/"},
        { name: "unsere Helden", to: "/"},
        { name: "neue Projekte", to: "/"},
      ],
    }
  },
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
  font-size: 18px;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgba(29, 29, 30, 0.79);
}

@media (max-width: 1024px) {
  .navs{
    display: none;
  }
}
</style>