<template>
  <div id="home-history-component">
    <div class="container">
      <div class="home-banner"></div>
      <div class="video">
        <video controls width="250">
          <source src="@/assets/videos/history2.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="content">
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
          <img src="@/assets/pexels/team.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHistoryComponent",
  methods: {

  },
};
</script>

<style scoped>
.container{

}

.video {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -125px;

}

video{
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.content{
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: center;
  gap: 30px;
}
.text, .image{
  max-width: 500px;
  width: 100%;
}
.content .text{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

p.reference{
  font-weight: bold;
}

.image img{
  width: 100%;
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
</style>
