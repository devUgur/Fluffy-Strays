<template>
  <div id="sidenav-profile-component">
    <div class="head">
      <div class="status">
        <div class="status-light"></div>
        <div class="status-text">Inaktiv</div>
      </div>
      <div class="options">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="body">
      <div class="profile">
        <div class="image">
          <router-link :to="'/admin/user/'+profileLink"></router-link>
          <img :src="imageSrc" alt="">
        </div>
        <router-link class="name" :to="'/admin/user/'+profileLink"> {{currentUserName}} </router-link>
        <div class="email" v-if="currentUser">{{currentUser.email}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidenavProfileComponent",
  computed: {
    profileLink(){
      return this.$store.getters['admin/userId'];
    },
    currentUser(){
      return this.$store.getters['adminUser/current'];
    },
    currentUserName(){
      if(this.currentUser){
        if(this.currentUser.firstname !== "" || this.currentUser.lastname !== ""){
          return this.currentUser.firstname + " " + this.currentUser.lastname;
        }
      }
      return "Profile Bearbeiten"
    },
    imageSrc(){
      if(this.currentUser && this.currentUser.image && this.currentUser.image.filePath){
        return 'http://localhost:3000/' + this.currentUser.image.filePath
      }else{
        return this.$store.getters['adminUser/imageSrc'];
      }
    }
  }
}
</script>

<style scoped>
#sidenav-profile-component{
  height: 200px;
  background: var(--color-palette-1-D);
  color: #e1e1e1;
  padding: 15px 20px;
}

.head{
  display: flex;
  place-items: center;
  justify-content: space-between;

}
.head .status{
  display: flex;
  place-items: center;
}
.head .status .status-light{
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: #f1b317;
  margin-right: 5px;
}

.head .options{
  display: flex;

}
.head .options div{
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: #CADFDE;
  margin-right: 2px;
}

.body{
  display: flex;
  flex-direction: column;
  height: calc(100% - 25px);
  place-items: center;
  justify-content: center;
  text-align: center;
}

.body .profile .image{
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #f5511f;
  margin: 0 auto;
  overflow: hidden;
}

.body .profile .image a{
  position: absolute;
  height: 100%;
  width: 100%;
}



img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>