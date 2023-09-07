<template>
  <div id="home-our-success-component">
    <div class="container">
      <div class="title">
        <h1>Unsere bisherigen Erfolge</h1>
        <p class="slogan">dank unserer großzügigen Unterstützer <img src="@/assets/flaticons/drwan-heart.png"></p>
      </div>
      <div class="content">
        <div class="list">
          <div class="list-row">
            <div class="list-item">
              <img src="@/assets/flaticons/cat.png" alt="">
              <div class="count">34</div>
              <div class="name">Kastrationen durchgeführt</div>
            </div>
            <div class="list-item">
              <img src="@/assets/flaticons/dog.png" alt="">
              <div class="count">35</div>
              <div class="name">übernommene Partnerschaften</div>
            </div>
          </div>
          <div class="list-row">
            <div class="list-item">
              <img src="@/assets/flaticons/bird.png" alt="">
              <div class="count">19</div>
              <div class="name">Operationen durchgeführt</div>
            </div>
            <div class="list-item">
              <img src="@/assets/flaticons/pet.png" alt="">
              <div class="count">22</div>
              <div class="name">gerettete Streuner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 100px;
}

.title {
  text-align: center;
}

.list {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;

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
  height: 250px;
}

.count{
  font-size: 34px;
  font-weight: bold;
}
</style>
