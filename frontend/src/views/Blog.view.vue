<template id="blog-view">
  <div>
    <BlogIntroComponent></BlogIntroComponent>
    <OneBlogListComponent></OneBlogListComponent>
  </div>
</template>

<script>
import BlogIntroComponent from "@/components/blog/BlogIntro.component.vue";
import OneBlogListComponent from "@/components/blog/OneBlogList.component.vue";
export default {
  name: "BlogView",
  components: {
    BlogIntroComponent,
    OneBlogListComponent
  }
}
</script>


<style scoped>

</style>