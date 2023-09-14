<template>
  <div id="topnav-donation-component">
    <div class="donation">
      <DonationButtonComponent></DonationButtonComponent>
      <GodfatherButtonComponent></GodfatherButtonComponent>
    </div>
  </div>
</template>

<script>
import DonationButtonComponent from "@/components/buttons/DonationButton.component.vue";
import GodfatherButtonComponent from "@/components/buttons/GodfatherButton.component.vue";
export default {
  props: ['sticky', 'collapsed'],
  name: "TopnavDonationComponent",
  components: {
    DonationButtonComponent,
    GodfatherButtonComponent
  }
}
</script>

<style scoped>
#topnav-donation-component{
  position: sticky;
  right: 20px;
}
.donation{
  display: flex;
  margin-left: auto;
  gap: 15px;
}

@media (max-width: 768px) {
  #topnav-donation-component{
    display: none;
  }
}
</style>