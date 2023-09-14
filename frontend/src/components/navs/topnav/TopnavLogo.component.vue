<template>
  <div id="topnav-logo-component">
    <div class="logo">
      <div class="logo-text" :class="{'collapsed-items': collapsed}">
        <h1 v-if="!collapsed">Fluffy Strays</h1>
        <div class="slogan">Hilf uns zu Helfen</div>
        <img v-show="!sticky" src="@/assets/canva/logo01.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sticky', 'collapsed'],
  name: ""
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
  height: calc(100vh - 20px);
  max-height: 100px;
}
h1{
  white-space: nowrap;
}
.logo .slogan{
  font-size: 14px;
  font-weight: bold;
}

.logo img{
  position: absolute;
  right: -50%;
  bottom: -50%;
  border: 0;
  height: 100px;
  border-radius: 50%;

}

.collapsed-items{
  display: none;
}
</style>