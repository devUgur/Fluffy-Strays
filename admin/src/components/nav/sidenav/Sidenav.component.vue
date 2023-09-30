<template>
  <div id="sidenav-component">
    <div>
      <SidenavProfileComponent></SidenavProfileComponent>
      <SidenavLinksComponent></SidenavLinksComponent>
    </div>
    <div class="options">
      <SignOutButtonComponent></SignOutButtonComponent>
    </div>
  </div>
</template>

<script>
import SidenavProfileComponent from "@/components/nav/sidenav/SidenavProfile.component.vue";
import SidenavLinksComponent from "@/components/nav/sidenav/SidenavLinks.component.vue";
import SignOutButtonComponent from "@/components/buttons/SignOutButton.component.vue";
export default {
  name: "SidenavComponent",
  components: {
    SidenavProfileComponent,
    SidenavLinksComponent,
    SignOutButtonComponent
  },
}
</script>

<style scoped>
#sidenav-component{
  min-width: 270px;
  background: var(--color-palette-1-C);
  border-radius: 30px;
  overflow: hidden;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 768px) {
  #sidenav-component{
    display: none;
  }
}
</style>