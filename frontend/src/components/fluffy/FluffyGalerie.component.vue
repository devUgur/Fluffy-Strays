<template>
  <div class="fluffy-galerie">
    <div class="container">
      <div class="list">
        <div class="list-item"> <img src="@/assets/flaticons/img.png" alt=""> </div>
        <div class="list-item"> <img src="@/assets/flaticons/img.png" alt=""> </div>
        <div class="list-item"> <img src="@/assets/flaticons/img.png" alt=""> </div>
        <div class="list-item"> <img src="@/assets/flaticons/img.png" alt=""> </div>
        <div class="list-item"> <img src="@/assets/flaticons/img.png" alt=""> </div>
        <div class="list-item"> <img src="@/assets/flaticons/img.png" alt=""> </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FluffyGalerie",
  props: ['fluffy'],
}
</script>

<style scoped>
.container{
  padding: var(--home-vertical-padding) 0;
}


.list{
  display: flex;
  flex-wrap: wrap;
  max-width: 1245px;
  gap: 30px;
}

.list-item{
  flex: 0 0 calc(33.33% - 30px);
  display: flex;
  justify-content: center;
  place-items: center;
  width: 300px;
  height: 250px;
  background-color: #e1e1e1;
}
</style>