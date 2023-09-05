<template>
  <div id="home-view">
    <HomeIntroComponent></HomeIntroComponent>
    <HomeAboutComponent></HomeAboutComponent>
    <HomeFluffysComponent></HomeFluffysComponent>
    <HomeBlogComponent></HomeBlogComponent>
  </div>
</template>

<script>
import HomeIntroComponent from "@/components/home/HomeIntro.component.vue";
import HomeAboutComponent from "@/components/home/HomeAbout.component.vue";
import HomeFluffysComponent from "@/components/home/HomeFluffys.component.vue";
import HomeBlogComponent from "@/components/home/HomeBlog.component.vue";
export default {
  name: "HomeView",
  components: {
    HomeIntroComponent,
    HomeAboutComponent,
    HomeFluffysComponent,
    HomeBlogComponent,
  }

}
</script>