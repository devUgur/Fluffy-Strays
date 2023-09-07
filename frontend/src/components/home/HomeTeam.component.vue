<template>
  <div id="home-team-component">
    <div class="container">
      <div class="content case-study">
        <div class="image">
          <img src="@/assets/flaticons/img.png" alt="">
        </div>
        <div class="text">
          <p class="reference">Fallstudie 1</p>
          <h1 class="title">From zero to hero</h1>
          <p class="descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eligendi est pariatur repellendus sed?
            Deleniti, doloremque doloribus ducimus ex, excepturi laboriosam laudantium minus officia, officiis
            praesentium repellat similique totam voluptates.
          </p>
          <button> Zu den Fallstudien </button>
        </div>
      </div>
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
  padding: var(--home-vertical-padding) 0;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 100px;
}

.content{
  display: flex;
  max-width: 1200px;
  width: 100%;
}

.case-study{
  gap: 60px;
  justify-content: space-between;
}

.case-study .image{
  height: 300px;
  width: 500px;
}

.case-study .text{
  max-width: 420px;
  margin: 0 auto;
  padding: 20px;
  justify-content: center;
}

.text{
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 20px;
  width: 100%;
}

p.reference{
  font-weight: bold;
}

.image{
  display: flex;
  justify-content: center;
  place-items: center;
  background-color: lightgrey;

}

/* Fügen Sie die folgenden CSS-Regeln hinzu, um den Button anzupassen */
.text button {
  align-self: flex-start;
  width: auto;
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
}


.content.team{
  background-color: grey;
}

.content.team .text{
  padding: 20px;
  width: calc(50% - 40px);
  color: white;
}
.content.team .image{
  width: 50%;
}

.content.team .text .descr{
  max-width: 300px;
}
</style>