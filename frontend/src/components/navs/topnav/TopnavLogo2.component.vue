<template>
  <div id="topnav-logo-component">
    <div class="logo">
      <img v-show="!sticky" src="@/assets/canva/logo01.png" alt="">
      <div class="logo-text" :class="{'collapsed-items': collapsed}">
        <h1 v-if="!collapsed">Fluffy Strays</h1>
        <p v-show="!sticky"  class="slogan">Hilf uns zu Helfen</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sticky', 'collapsed'],
  name: "TopnavLogo2Component"
}
</script>

<style scoped>
#topnav-logo-component{

}

.logo{
  max-width: 200px;
  width: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  place-items: center;
  gap: 10px;
  height: calc(100vh - 20px);
  max-height: 100px;
}

.logo-text{

}
h1{
  white-space: nowrap;
}
.logo .slogan{
  font-size: 14px;
  font-weight: bold;
}

.logo img{
  height: 82px;
}

.collapsed-items{
  display: none;
}
</style>