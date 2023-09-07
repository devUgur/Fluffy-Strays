<template>
  <div id="main-layout">
    <TopnavComponent></TopnavComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// Components
import TopnavComponent from "@/components/navs/Topnav.component.vue";
import FooterComponent from "@/components/footer/Footer.component.vue";

export default {
  name: "MainLayout",
  components: {
    TopnavComponent,
    FooterComponent
  }
}
</script>

<style scoped>

</style>