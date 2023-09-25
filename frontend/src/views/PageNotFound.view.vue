<template>
  <div id="page-not-found-view">
    <TitleComponent :title="'Seite nicht gefunden...'"></TitleComponent>
    <button class="primary">
      <img src="@/assets/flaticons/right-circle-arrow-white.png" style="transform: rotateY(180deg)" alt="">
      <div class="text">Zurück</div>
    </button>
  </div>
</template>

<script>
import TitleComponent from "@/components/title/title.component.vue";
export default {
  name: "PageNotFoundView",
  components: {
    TitleComponent
  }
}
</script>

<style scoped>
#page-not-found-view{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
}

button{
  display: flex;
  place-items: center;
  padding: 10px 20px;
  background: var(--color-palette-1-D);
  gap: 15px;
  color: white;
}

button img{
  height: 18px;

}
</style>