<template>
  <div id="main-layout">
    <TopnavComponent></TopnavComponent>
    <router-view></router-view>
  </div>
</template>

<script>
// Components
import TopnavComponent from "@/components/navs/Topnav.component.vue";


export default {
  name: "MainLayout",
  components: {
    TopnavComponent
  }
}
</script>

<style scoped>

</style>