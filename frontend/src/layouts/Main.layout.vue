<template>
  <div id="main-layout">
    <TopnavComponent></TopnavComponent>
    <div id="view">
      <router-view v-slot="{ Component }">
        <transition :name="'fade'" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
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

<style>
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}

body{
  overflow-x: hidden;
}
</style>
<style scoped>
#view{
  width: 100%;
  overflow: hidden;
}
</style>