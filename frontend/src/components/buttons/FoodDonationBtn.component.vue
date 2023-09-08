<template>
  <div id="food-donation-btn-component">
    <button class="donate" @click="submit">
      <span>eine Futterspende</span>
      <img src="@/assets/flaticons/donate.png" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "FoodDonationBtnComponent",
  methods: {
    submit(){
      console.log("food-donation");
    }
  }
}
</script>

<style scoped>
button{
  background-color: #f5511f;
  padding: 15px 20px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-radius: 3px;

  display: flex;
  place-items: center;
  gap: 5px;
}


</style>