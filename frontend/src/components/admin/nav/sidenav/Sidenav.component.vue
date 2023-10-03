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
import SidenavProfileComponent from "@/components/admin/nav/sidenav/SidenavProfile.component.vue";
import SidenavLinksComponent from "@/components/admin/nav/sidenav/SidenavLinks.component.vue";
import SignOutButtonComponent from "@/components/admin/buttons/SignOutButton.component.vue";
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
  background: var(--color-palette-2-A);
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