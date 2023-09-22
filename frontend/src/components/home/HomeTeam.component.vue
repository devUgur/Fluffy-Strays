<template>
  <div id="home-team-component">
    <div class="container">

      <div class="content team">
        <div class="text">
          <h2 class="title">Das Team stellt sich vor</h2>
          <p class="descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, repellat.</p>
          <button>Zum Team</button>
        </div>
        <div class="image">
          <img src="@/assets/flaticons/img.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ""
}
</script>

<style scoped>
.container{
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  place-items: center;
}

.content{
  display: flex;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  background-color: grey;

}

.text, .image{
  height: 400px;
}
.text{
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 20px;
  flex: 1 1 400px;
  padding: 30px;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
}

.image{
  display: flex;
  justify-content: center;
  place-items: center;
  background-color: lightgrey;
  flex: 1 1 400px;
}

/* Fügen Sie die folgenden CSS-Regeln hinzu, um den Button anzupassen */
.text button {
  align-self: flex-start;
  width: auto;
  padding: 10px 20px;
  background-color: var(--color-palette-1-D);
  color: white;
  border: none;
  border-radius: 5px;
}


.content.team{
  display: flex;
  flex-wrap: wrap;
}


.content.team .text .descr{
  max-width: 300px;
}
</style>