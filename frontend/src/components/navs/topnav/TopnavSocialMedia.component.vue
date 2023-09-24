<template>
  <div id="topnav-social-media-component">
    <div class="layout" v-show="!sticky">
      <SocialMediaIconComponent
        v-for="icon in socialIcons"
        :icon="icon"
        :active-icon="icon.color"
        :passive-icon="icon.primary"
      ></SocialMediaIconComponent>
    </div>
  </div>
</template>

<script>
import SocialMediaIconComponent from "@/components/icons/SocialMediaIcon.component.vue";
export default {
  props: ['sticky', 'collapsed'],
  components: {
    SocialMediaIconComponent,
  },
  name: "",
  methods: {


  },
  computed: {
    socialIcons(){
      return this.$store.getters['socialmedia/socialIcons'];
    }
  },
}
</script>

<style scoped>
#topnav-social-media-component{
  display: flex;
  justify-content: right;
  max-width: 300px;
  min-width: 300px;
  width: 100%;
  height: 40px;
}

.layout{
  display: flex;
  place-items: center;
  gap: 15px;
}

@media (max-width: 1200px) {
  .layout{
    display: none;
  }
}
</style>