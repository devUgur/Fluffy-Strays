<template>
  <div id="home-our-success-component">
    <div class="container">
      <div class="title">
        <TitleComponent :title="'Unsere bisherigen Erfolge'" :slogan="'Dank unserer großzügigen Unterstützer'"></TitleComponent>
      </div>
      <div class="content">
        <div class="list">
          <div class="list-row">
            <div class="list-item">
              <img src="@/assets/flaticons/cat-color-1-A.png" alt="">
              <div class="count">34</div>
              <div class="name">Kastrationen durchgeführt</div>
            </div>
            <div class="list-item">
              <img src="@/assets/flaticons/dog-color-1-A.png" alt="">
              <div class="count">35</div>
              <div class="name">übernommene Partnerschaften</div>
            </div>
          </div>
          <div class="list-row">
            <div class="list-item">
              <img src="@/assets/flaticons/bird-color-1-A.png" alt="">
              <div class="count">19</div>
              <div class="name">Operationen durchgeführt</div>
            </div>
            <div class="list-item">
              <img src="@/assets/flaticons/pet-color-1-A.png" alt="">
              <div class="count">22</div>
              <div class="name">gerettete Streuner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/title/title.component.vue";
export default {
  name: "HomeOurSuccessComponent",
  components: {
    TitleComponent,
  }
}
</script>

<style scoped>
.container {
  padding-bottom: var(--home-vertical-padding);
}

.title {
  text-align: center;
}

.list {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

}

.list-row {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px; /* Add margin to create space between rows */
  flex-wrap: wrap;
}

.list-item {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 250px;
  height: 200px;
  padding-bottom: 50px;
}

.count{
  font-size: 34px;
  font-weight: bold;
}
</style>
