<template>
  <div id="topnav-page-name-component">
    {{currentPageName}}
  </div>
</template>

<script>

export default {
  name: "TopnavComponent",
  computed: {
    currentPageName(){
      return this.$store.getters['admin/pageName'];
    }
  }
}
</script>

<style scoped>

</style>