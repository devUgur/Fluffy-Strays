<template>
  <div id="user-list-component">
    <div class="component-title">
      Benutzer Liste ({{userList.length}})
    </div>
    <div class="list">
      <UserListItemComponent v-for="user in userList" :user="user"></UserListItemComponent>
    </div>
  </div>
</template>

<script>
import UserListItemComponent from "@/components/admin/user/UserListItem.component.vue";
export default {
  name: "UserListComponent",
  components: {
    UserListItemComponent,
  },
  methods: {
    async getUsers(){
      await this.$store.dispatch('adminUser/getAll');
    }
  },
  computed: {
    userList(){
      return this.$store.getters['adminUser/list']
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<style scoped>
#user-list-component{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.list{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>