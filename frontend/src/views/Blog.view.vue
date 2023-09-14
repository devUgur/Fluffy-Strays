<template id="blog-view">
  <div>
    <BlogIntroComponent></BlogIntroComponent>
    <OneBlogComponent></OneBlogComponent>
  </div>
</template>

<script>
import BlogIntroComponent from "@/components/blog/BlogIntro.component.vue";
import OneBlogComponent from "@/components/blog/OneBlog.component.vue";
export default {
  name: "BlogView",
  components: {
    BlogIntroComponent,
    OneBlogComponent
  }
}
</script>


<style scoped>

</style>