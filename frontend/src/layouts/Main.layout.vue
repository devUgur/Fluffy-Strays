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
    <ScrollToTopButtonComponent></ScrollToTopButtonComponent>
    <CookiesComponent></CookiesComponent>
    <DonationPopupComponent></DonationPopupComponent>
  </div>
</template>

<script>
// Components
import TopnavComponent from "@/components/navs/Topnav.component.vue";
import FooterComponent from "@/components/footer/Footer2.component.vue";
import ScrollToTopButtonComponent from "@/components/buttons/ScrollToTopButton.component.vue";
import CookiesComponent from "@/components/cookies/Cookies.component.vue";
import DonationPopupComponent from "@/components/donation/DonationPopup.component.vue";
export default {
  name: "MainLayout",
  components: {
    TopnavComponent,
    FooterComponent,
    ScrollToTopButtonComponent,
    CookiesComponent,
    DonationPopupComponent
  }
}
</script>

<style scoped>
#view{
  width: 100%;
  overflow: hidden;
  min-height: calc(100vh - 200px);
}
</style>