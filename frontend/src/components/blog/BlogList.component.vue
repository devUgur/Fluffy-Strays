<template>
  <div id="blog-list-component" class="list">
    <BlogCardComponent v-for="blog in blogs" :blog="blog"></BlogCardComponent>
  </div>
</template>

<script>
import BlogCardComponent from "@/components/blog/BlogCard.component.vue";
export default {
  name: "BlogListComponent",
  components: {
    BlogCardComponent
  },
  data(){
    return{
      blogs: [
        { title: '', filename:'blog01.png', descr: '', to: '' },
        { title: '', filename:'blog02.png', descr: '', to: '' },
        { title: '', filename:'blog04.png', descr: '', to: '' },
        { title: '', filename:'blog05.png', descr: '', to: '' },
        { title: '', filename:'blog06.png', descr: '', to: '' },
        { title: '', filename:'blog08.png', descr: '', to: '' },
      ]
    }
  }
}
</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 1260px;

}
</style>