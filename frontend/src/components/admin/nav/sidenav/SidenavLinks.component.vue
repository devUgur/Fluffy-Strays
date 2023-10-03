<template>
  <div id="sidenav-links-component">
    <div class="links list">
      <div class="banner list-item"></div>
      <div class="link list-item" v-for="link in links">
        <router-link class="name" :to="link.to" @click="onClick(link.name)">
          <img :src="require('@/assets/flaticons/nav/' + link.icon)" alt="">
          {{link.name}}</router-link>
      </div>
      <div class="banner list-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidenavLinksComponent",
  components: {

  },
  data(){
    return {
      links: [
        { name: "Dashboard", to: "/admin", icon: "dashboard.png" },
        { name: "Users", to: "/admin/users", icon: "users.png" },
        { name: "Fluffys", to: "/admin/fluffys", icon: "fluffy.png" },
        { name: "Donation", to: "/admin/donation", icon: "donation.png" },
        { name: "Subscription", to: "/admin/subscription", icon: "subscription.png" },
        { name: "Blogs", to: "/admin/blogs", icon: "blog.png" },
      ]
    }
  },
  methods: {
    onClick(name){
      this.$store.commit('admin/SET_PAGE_NAME', name)
    }
  }
}
</script>

<style scoped>
#sidenav-links-component{

}

.links.list{
  display: flex;
  flex-direction: column;
  place-items: flex-end;
  border-radius: 50%;

}

.link.list-item{
  position: relative;
  height: 40px;
  max-width: 220px;
  width: 100%;
  border-radius: 50%;
}

.link.list-item img{
  width: 25px;
  height: 25px;
  margin-right: 15px;
  border-radius: 50%;
  transition: all 0.5s;
}

.link.list-item a{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  place-items: center;
  text-decoration: none;
  color: var(--color-palette-1-D);
  padding: 0 15px;
  border-radius: 30px;
  transition: all 0.5s;

}

.banner{
  height: 30px;
}



.link.list-item a.router-link-exact-active {
  color: #42b983;
  background: rgba(223, 235, 233, 0.98);
}

a.router-link-exact-active .list-item{
  background: #f50c3f;
}

.link.list-item a.router-link-exact-active img{
  margin-right: 7px;
  background-color: #2c3e50;
}
</style>