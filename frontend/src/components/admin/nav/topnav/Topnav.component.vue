<template>
  <div id="topnav-component">
    <div id="topnav-layout">
      <TopnavPageNameComponent></TopnavPageNameComponent>
      <SignOutButtonComponent></SignOutButtonComponent>
    </div>
  </div>
</template>

<script>
import TopnavPageNameComponent from "@/components/admin/nav/topnav/TopnavPageName.component.vue";
import SignOutButtonComponent from "@/components/admin/buttons/SignOutButton.component.vue";
export default {
  name: "TopnavComponent",
  components: {
    TopnavPageNameComponent,
    SignOutButtonComponent
  },
}
</script>

<style scoped>
#topnav-component{
  height: 80px;
  background: white;
  width: calc(100%);
  margin-left: -30px;
  padding-left: 30px;
  z-index: -1;

  display: flex;
  place-items: center;
  justify-content: space-between;
}

#topnav-layout{
  display: flex;
  place-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
}
</style>