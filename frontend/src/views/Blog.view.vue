<template id="blog-view">
  <div>
    <OneBlogComponent></OneBlogComponent>
  </div>
</template>

<script>
import OneBlogComponent from "@/components/blog/OneBlog.component.vue";
export default {
  name: "BlogView",
  components: {
    OneBlogComponent
  }
}
</script>


<style scoped>

</style>