<template>
  <div id="admin-layout">
    <div id="view-layout">
      <SidenavComponent></SidenavComponent>
      <div id="view">
        <TopnavComponent></TopnavComponent>
        <div class="router-view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopnavComponent from "@/components/admin/nav/topnav/Topnav.component.vue";
import SidenavComponent from "@/components/admin/nav/sidenav/Sidenav.component.vue";
export default {
  name: "AdminLayout",
  components: {
    SidenavComponent,
    TopnavComponent
  },

}
</script>

<style>


</style>

<style scoped>
#admin-layout{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  height: 100vh;

  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #CADFDE;
  margin: 0;

}

#view-layout{
  position: relative;
  background: rgba(223, 235, 233, 0.98);
  border-radius: 30px;
  margin: auto;
  height: calc(100% - 20vh);
  display: flex;
  max-width: 1420px;
  width: 100%;
  overflow: hidden;
}

#view{
  position: relative;
  height: 100%;
  width: 100%;
}

.router-view{
  padding: 30px 40px;
  overflow-y: auto;
  height: calc(100% - 140px);
  scrollbar-width: thin;
}

:root{
  --box-shadow-palette-1-A: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.container{
  max-width: 1200px;
  width: 100%;
}



.blur{
  background-color: rgba(8, 14, 14, 0.85);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
.blur-light{
  background-color: rgba(107, 108, 108, 0.37);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
</style>