<template>
  <div id="fluffy-strays-blog-component">
    <div class="container">
      <TitleComponent :title="'Fluffy Strays Blog'" :slogan="'Neues aus dem Leben der flauschigen Streuner'"></TitleComponent>
      <BlogListComponent></BlogListComponent>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/title/title.component.vue";
import BlogListComponent from "@/components/blog/BlogList.component.vue";
export default {
  name: "HomeBlogComponent",
  components: {
    TitleComponent,
    BlogListComponent,
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: var(--home-vertical-padding);
}
.container > .title{
  text-align: center;
  padding-bottom: 50px;
}
.title p{
  font-weight: bold;
  margin: 0 auto;
  max-width: 300px;
  font-family: Indie, sans-serif;
}
</style>