<template>
  <div id="home-view">
    <HomeIntroComponent></HomeIntroComponent>
    <HomeAboutComponent></HomeAboutComponent>
    <HomeFluffysComponent></HomeFluffysComponent>
    <HomeBlogComponent></HomeBlogComponent>
    <HomeBannerComponent :text="'Die größte Ehre, die man einem Menschen antun kann, ist die, dass man zu ihm Vertrauen hat. - Matthias Claudius'"></HomeBannerComponent>
    <HomeFeedbackComponent></HomeFeedbackComponent>
    <HomeHistoryComponent></HomeHistoryComponent>
    <HomeBannerComponent :text="'Wir können zusammen ein Lichtblick in dieser dunklen Zeit sein, wenn wir gemeinsam ein Zeichen gegen das Elend setzen.'"></HomeBannerComponent>
    <HomeTeamComponent></HomeTeamComponent>
    <HomeOurSuccessComponent></HomeOurSuccessComponent>
  </div>
</template>

<script>
import HomeIntroComponent from "@/components/home/HomeIntro2.component.vue";
import HomeAboutComponent from "@/components/home/HomeAbout.component.vue";
import HomeFluffysComponent from "@/components/home/HomePickFluffySlide.component.vue";
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