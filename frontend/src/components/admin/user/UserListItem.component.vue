<template>
  <div id="user-list-item-component">
    <div class="image">
      <!--<span>{{user.status || "Offline"}}</span>-->
      <img :src="getUserImageSrc(user.image)" alt="">
    </div>
    <div class="content">
      <div class="content-item">
        <span class="name">Status</span>
        <div class="content-value">{{user.status || "Offline"}}</div>
      </div>
      <div class="content-item">
        <span class="name">Benutzername</span>
        <div class="content-value">{{user.username}}</div>
      </div>
      <div class="content-item">
        <span class="name">Name</span>
        <div class="content-value">{{user.firstname}} {{user.lastname}}</div>
      </div>
      <div class="content-item">
        <span class="name">Email</span>
        <div class="content-value">{{user.email}}</div>
      </div>
    </div>
    <div class="options">
      <button><img src="@/assets/flaticons/bin.png" alt="Löschen"></button>
      <router-link :to="'user/'+user._id">
        <img src="@/assets/flaticons/setting.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserListItemComponent",
  props: ['user'],
  methods: {
    getUserImageSrc(userImage){
      if(userImage){
        return "http://localhost:3000/" + userImage.filePath;
      }else{
        return require("@/assets/flaticons/default-user-color-1-D.png")
      }
    }
  }
}
</script>

<style scoped>
#user-list-item-component{
  border-radius: 40px;
  display: flex;
  place-items: center;
  gap: 10px;
  background-color: white;
  padding: 10px;
  transition: box-shadow 0.5s;
}

#user-list-item-component:hover{
  box-shadow: var(--box-shadow-palette-1-A);
}

.content{
  display: flex;
  width: 100%;
  gap: 15px;
  margin-left: 15px;
}
.content-item{
  max-width: 150px;
  width: 100%;
}

.content-item span.name{
  font-size: 12px;
  font-weight: bold;
}
.image{
  position: relative;
  height: 60px;
  width: 60px;
  display: flex;
  flex-direction: column;
  place-items: center;
  flex-shrink: 0;
}
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
}

.image span{
  position: absolute;
  bottom: -10px;
  font-size: 11px;
  letter-spacing: 1px;
  color: white;
  background-color: rgba(44, 62, 80, 0.78);
  padding: 3px 5px;
  border-radius: 5px;
}

.options{
  display: flex;
  gap: 10px;
  place-items: center;
  padding: 0 10px;
}
.options a{
  display: flex;
}
.options img{
  height: 24px;
  width: 24px;
}

.options button{
  display: flex;
  padding: 0;
  background-color: transparent;
}
</style>