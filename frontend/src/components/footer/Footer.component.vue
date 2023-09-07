<template>
  <div id="footer-component">
    <div class="image">
      <div class="img-layout">
        <img src="@/assets/flaticons/img.png" alt="">
      </div>
    </div>
    <ContactFormularComponent></ContactFormularComponent>
  </div>
</template>

<script>
import ContactFormularComponent from "@/components/contact/ContactFormular.component.vue";
export default {
  name: "FooterComponent",
  components: {
    ContactFormularComponent
  }
}
</script>

<style scoped>
#footer-component{
  min-height: 400px;
  background-color: orange;
}
.image{
  display: flex;
  justify-content: center;
}

.image img{
  height: 64px;
  width: 64px;
  object-fit: cover;
}

.img-layout{
  margin-top: -100px;
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 50%;

  display: flex;
  place-items: center;
  justify-content: center;
}
</style>