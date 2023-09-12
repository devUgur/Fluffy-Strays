<template>
  <div class="layout"></div>
  <div class="topnav" :class="{'sticky': isSticky, 'collapsed': isCollapsed}">
    <div class="logo-content">
      <TopnavLogoComponent :sticky="isSticky" :collapsed="isCollapsed"></TopnavLogoComponent>
    </div>
    <div class="links-content">
      <TopnavLinksComponent sticky="isSticky" :collapsed="isCollapsed"></TopnavLinksComponent>
    </div>
    <div class="options-content">
      <div></div>
      <TopnavDonationComponent></TopnavDonationComponent>
    </div>
  </div>
</template>

<script>
import TopnavLogoComponent from "@/components/navs/topnav/TopnavLogo.component.vue";
import TopnavLinksComponent from "@/components/navs/topnav/TopnavLinks.component.vue";
import TopnavDonationComponent from "@/components/navs/topnav/TopnavDonation.component.vue";
import TopnavSocialMediaComponent from "@/components/navs/topnav/TopnavSocialMedia.component.vue";
export default {
  name: "TopnavComponent",
  components: {
    TopnavLogoComponent,
    TopnavLinksComponent,
    TopnavDonationComponent
  },
  data() {
    return {
      isSticky: false,
      isCollapsed: false,
      windowScrollY: 0,
    };
  },

  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isSticky = currentScrollY > 100;
      this.isCollapsed = window.scrollY > this.windowScrollY;
      this.windowScrollY = currentScrollY;
    },
  },
  mounted() {
    this.handleScroll(); // Initial call to set the initial state
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>



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

  display: flex;
  justify-content: space-between;
  place-items: center;
}

.layout{
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
</style>
