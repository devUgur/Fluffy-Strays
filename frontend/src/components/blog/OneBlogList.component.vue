<template>
  <div id="one-blog-list-component">
    <TitleComponent :title="'Unsere Blogs'"></TitleComponent>
    <OneBlogView v-for="blog in blogs" :blog="blog" :key="blog._id"></OneBlogView>
  </div>
</template>

<script>
import TitleComponent from "@/components/title/title.component.vue";
import OneBlogView from "@/views/user/OneBlog.view.vue";
export default {
  name: "OneBlogListComponent",
  components: {
    OneBlogView,
    TitleComponent
  },
  computed: {
    blogs(){
      return this.$store.getters['blog/list'];
    }
  }
}
</script>