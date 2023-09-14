<template>
  <div id="fluffy-strays-blog-component">
    <div class="container">
      <div class="title">
        <h1> der Fluffy Strays Blog</h1>
        <p>neues aus dem Leben der flauschigen Streuner</p>
      </div>
      <BlogListComponent></BlogListComponent>
    </div>
  </div>
</template>

<script>
import BlogListComponent from "@/components/blog/BlogList.component.vue";
export default {
  name: "HomeBlogComponent",
  components: {
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
  font-size: 20px;
  font-family: Indie, sans-serif;
}
</style>