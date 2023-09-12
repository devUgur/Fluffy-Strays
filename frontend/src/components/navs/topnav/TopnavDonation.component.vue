<template>
  <div id="topnav-donation-component" :class="{'collapsed': collapsed}">
    <div class="donation">
      <button class="donate">
        <span>Jetzt spenden</span>
        <img src="@/assets/flaticons/heart-white.png" alt="">
      </button>
      <button class="partnership">
        <span>Pate werden</span>
        <img src="@/assets/flaticons/right-arrow-white.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sticky', 'collapsed'],
  name: "TopnavDonationComponent"
}
</script>

<style scoped>
#topnav-donation-component{
  position: sticky;
  right: 20px;
}
#topnav-donation-component.collapsed{
  position: absolute !important;
  background-color: lightgreen;
}
.donation{
  display: flex;
  margin-left: auto;
  gap: 15px;
}

button{
  max-width: 220px;
  padding: 10px 40px;
  width: 100%;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  display: flex;
  place-items: center;
  gap: 15px;
  white-space: nowrap;
  justify-content: center;
}

button img{
  height: 22px;
}

button.donate{
  background-color: orangered;
}
button.partnership{
  background-color: cornflowerblue;
}
</style>