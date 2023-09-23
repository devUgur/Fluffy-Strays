<template>
  <div class="dummy"></div>
  <div class="topnav" :class="{'sticky': sticky, 'collapsed': collapsed}">
    <div class="layout">
      <div class="logo-content">
        <!-- <TopnavLogoComponent :sticky="isSticky" :collapsed="isCollapsed"></TopnavLogoComponent> -->
        <TopnavLogo2Component :sticky="sticky" :collapsed="collapsed"></TopnavLogo2Component>
      </div>
      <div class="links-content">
        <TopnavLinksComponent :sticky="sticky" :collapsed="collapsed"></TopnavLinksComponent>
      </div>

      <div class="options-content">
        <TopnavSocialMediaComponent :sticky="sticky" :collapsed="collapsed"></TopnavSocialMediaComponent>
        <!-- <LanguageSelectorComponent v-if="!sticky"></LanguageSelectorComponent> -->
        <MenuButtonComponent v-show="!collapsed" class="menu-btn" :sticky="sticky" :collapsed="collapsed"></MenuButtonComponent>
      </div>
      <div class="donations" :class="{'collapsed': collapsed, 'sticky': !sticky}">
        <TopnavDonationComponent></TopnavDonationComponent>
      </div>
    </div>
  </div>
</template>

<script>
import TopnavLogoComponent from "@/components/navs/topnav/TopnavLogo.component.vue";
import TopnavLogo2Component from "@/components/navs/topnav/TopnavLogo2.component.vue";
import TopnavLinksComponent from "@/components/navs/topnav/TopnavLinks.component.vue";
import TopnavDonationComponent from "@/components/navs/topnav/TopnavDonation.component.vue";
import TopnavSocialMediaComponent from "@/components/navs/topnav/TopnavSocialMedia.component.vue";
import LanguageSelectorComponent from "@/components/selectors/LanguageSelector.component.vue";
import MenuButtonComponent from "@/components/buttons/MenuButton.component.vue";
export default {
  name: "TopnavComponent",
  components: {
    LanguageSelectorComponent,
    TopnavLogoComponent,
    TopnavLogo2Component,
    TopnavLinksComponent,
    TopnavDonationComponent,
    TopnavSocialMediaComponent,
    MenuButtonComponent
  },
  computed: {
    sticky(){
      return this.$store.getters['topnav/sticky'];
    },
    collapsed(){
      return this.$store.getters['topnav/collapsed'];
    },
  },
  mounted() {
    this.$store.dispatch('topnav/initScrollHandler');

  },
  beforeDestroy() {
    this.$store.dispatch('topnav/destroyScrollHandler');
  },
};
</script>

<style>
.donations.sticky button{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
}
</style>

<style scoped>
.topnav {
  position: fixed;
  top: 0;
  width: calc(100% - 80px);
  z-index: 2000;
  background-color: white;
  transition: height 0.5s ease-in-out, background-color 0.5s ease-in-out;
  height: 100px; /* Höhe der geöffneten Topnav */
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;

  padding-left: 40px;
  padding-right: 40px;
}

.layout {
  position: relative;
  display: flex;
  justify-content: space-between;
  place-items: center;
  height: 100%;
}

.dummy{
  position: relative;
  height: 100px;
  width: 100%;
}

.topnav.sticky {
  height: 70px; /* Höhe der geschlossenen Topnav */
}

.topnav.collapsed {
  height: 0; /* Höhe der geschlossenen Topnav */
}
.logo-content{

}

.options-content{
  display: flex;
  place-items: center;
  gap: 20px;
}

.donations{
  position: absolute;
  right: 0;
  bottom: -25px;
  transition: all 0.5s;
}

.donations.collapsed{
  bottom: -60px;
}
.donations.sticky{
  bottom: -60px;
}


.menu-btn{
  display: none;
}

@media (max-width: 768px) {
  .topnav{
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - 40px);
  }
}


@media (max-width: 1024px) {
  .menu-btn{
    display: flex;
  }
}

</style>
