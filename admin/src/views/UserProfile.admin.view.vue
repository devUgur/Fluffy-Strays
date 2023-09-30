<template>
  <div id="user-profile-admin-view">
    <div class="container">
      <h2>User Profile</h2>
      <div class="content" v-if="currentUser">
        <UserProfileImageComponent :user="currentUser"></UserProfileImageComponent>
        <UserPersonalDetailsComponent :user="currentUser"></UserPersonalDetailsComponent>
        <UpdateUserButtonComponent :user="currentUser" :getUserById="getUserById"></UpdateUserButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileImageComponent from "@/components/user/user-profile/UserProfileImage.component.vue";
import UserPersonalDetailsComponent from "@/components/user/user-profile/UserPersonalDetails.component.vue";
import UpdateUserButtonComponent from "@/components/user/user-profile/UpdateUserButton.component.vue";
export default {
  name: "UserProfileAdminView",
  components: {
    UserProfileImageComponent,
    UserPersonalDetailsComponent,
    UpdateUserButtonComponent
  },
  data(){
    return {
      currentUser: null,
    }
  },
  methods: {
    async onInit(){
      try {
        this.$store.commit('admin/SET_PAGE_NAME', 'User Profile');
        await this.getUserById();
      }catch (e) {
        console.log(e);
      }
    },
    async getUserById(){
      const result = await this.$store.dispatch('adminUser/getById', this.$route.params.id);
      if(result && result.status === 200){
        this.currentUser = result.data;
      }
    },
  },
  mounted() {
    this.onInit();
  }
}
</script>

<style scoped>
.container{
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  width: 100%;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  width: 100%;
}
</style>