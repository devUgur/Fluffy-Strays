<template>
  <div id="menu-button-component" :class="{'show': !this.collapsed}">
    <img src="@/assets/flaticons/menu.png" alt="">
  </div>
</template>

<script>
export default {
  name: "MenuButtonComponent",
  props: ['collapsed'],
  computed: {
    open(){
      return this.$store.getters['menu/open']
    }
  },
  methods: {
    toggle(){
      this.$store.dispatch('menu/toggle');
    }
  }
}
</script>

<style scoped>
#menu-button-component{
  position: relative;
}
img{
  height: 52px;
  cursor: pointer;
}
</style>