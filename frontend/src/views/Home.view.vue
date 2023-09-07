<template>
  <div id="home-view">
    <HomeIntroComponent></HomeIntroComponent>
    <HomeAboutComponent></HomeAboutComponent>
    <HomeFluffysComponent></HomeFluffysComponent>
    <HomeBlogComponent></HomeBlogComponent>
    <HomeBannerComponent></HomeBannerComponent>
    <HomeFeedbackComponent></HomeFeedbackComponent>
    <HomeHistoryComponent></HomeHistoryComponent>
    <HomeBannerComponent></HomeBannerComponent>
    <HomeTeamComponent></HomeTeamComponent>
    <HomeOurSuccessComponent></HomeOurSuccessComponent>
  </div>
</template>

<script>
import HomeIntroComponent from "@/components/home/HomeIntro.component.vue";
import HomeAboutComponent from "@/components/home/HomeAbout.component.vue";
import HomeFluffysComponent from "@/components/home/HomeFluffys.component.vue";
import HomeBlogComponent from "@/components/home/HomeBlog.component.vue";
import HomeBannerComponent from "@/components/home/HomeBanner.component.vue";
import HomeFeedbackComponent from "@/components/home/HomeFeedback.component.vue";
import HomeHistoryComponent from "@/components/home/HomeHistory.component.vue";
import HomeTeamComponent from "@/components/home/HomeTeam.component.vue";
import HomeOurSuccessComponent from "@/components/home/HomeOurSuccess.component.vue";
export default {
  name: "HomeView",
  components: {
    HomeIntroComponent,
    HomeAboutComponent,
    HomeFluffysComponent,
    HomeBlogComponent,
    HomeBannerComponent,
    HomeFeedbackComponent,
    HomeHistoryComponent,
    HomeTeamComponent,
    HomeOurSuccessComponent
  }

}
</script>