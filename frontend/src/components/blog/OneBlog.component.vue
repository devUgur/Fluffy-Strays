<template>
  <div id="one-blog-component">
    <div v-if="blog"> {{ blog }}</div>
    <div v-else>No Blog found</div>
  </div>
</template>

<script>

export default {
  name: "OneBlogComponent",
  //props: ['blog'],
  computed: {
    blog(){
      let blogs = this.$store.getters['blog/list'];
      return blogs.find(blog => blog._id === this.$route.params.id);
    }
  },
}
</script>

<style scoped>

</style>