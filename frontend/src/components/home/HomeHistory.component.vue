<template>
  <div id="home-history-component">
    <div class="container">
      <AboutVideoBannerComponent></AboutVideoBannerComponent>
      <div class="content">
        <div class="item">
          <div class="text">
            <p class="reference">Fallstudie 1</p>
            <h1 class="title">From zero to hero</h1>
            <p class="descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eligendi est pariatur repellendus sed?
              Deleniti, doloremque doloribus ducimus ex, excepturi laboriosam laudantium minus officia, officiis
              praesentium repellat similique totam voluptates.
            </p>
            <button> Zu den Fallstudien </button>
          </div>
          <div class="image">
            <img src="@/assets/flaticons/img.png" class="default" alt="">
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img src="@/assets/flaticons/img.png" class="default" alt="">
          </div>
          <div class="text right">
            <p class="reference">Fallstudie 1</p>
            <h1 class="title">From zero to hero</h1>
            <p class="descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eligendi est pariatur repellendus sed?
              Deleniti, doloremque doloribus ducimus ex, excepturi laboriosam laudantium minus officia, officiis
              praesentium repellat similique totam voluptates.
            </p>
            <button> Zu den Fallstudien </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutVideoBannerComponent from "@/components/videos/AboutVideoBanner.component.vue";
export default {
  name: "HomeHistoryComponent",
  components: {
    AboutVideoBannerComponent
  }
};
</script>

<style scoped>





.content{
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 0 auto;
  padding: 150px 0 100px;
  padding-right: 30px;
  padding-left: 30px;
}

.content .item{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

.content .item:last-child{
  flex-wrap: wrap-reverse;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  max-width: 500px;
  height: 300px;
  width: 100%;
  flex: 1 1 200px;
}

p.reference{
  font-weight: bold;
}

.image{
  background-color: #b7b7b7;
  height: 300px;
  flex: 1 1 200px;
  width: 100%;
  display: flex;
  place-items: center;
  justify-content: center;
}

.image img{
  width: 100%;
  object-fit: cover;
}

.text button {
  align-self: flex-start;
  width: auto;
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

img.default{
  height: 22px;
  width: 22px;
}


.text.right{
}

.text.right button{
  margin-left: auto;
}
</style>
