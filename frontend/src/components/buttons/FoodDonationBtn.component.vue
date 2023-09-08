<template>
  <div id="food-donation-btn-component">
    <button @click="submit"> eine Futterspende </button>
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