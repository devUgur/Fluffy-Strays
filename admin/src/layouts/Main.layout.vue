<template>
  <div id="main-layout">
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
import TopnavComponent from "@/components/nav/topnav/Topnav.component.vue";
import SidenavComponent from "@/components/nav/sidenav/Sidenav.component.vue";
export default {
  name: "MainLayout",
  components: {
    TopnavComponent,
    SidenavComponent
  }

}
</script>

<style scoped>
#main-layout{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  height: 100vh;
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
</style>