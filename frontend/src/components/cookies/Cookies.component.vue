<template>
  <div id="cookies-component">
    <transition name="slide-down">
      <div class="banner" v-if="!acceptCookies">
        <p class="text">
          Wir verwenden Cookies auf unserer Website, um zu verstehen, wie Sie diese nutzen.
          Indem Sie auf „Zustimmen“ klicken, stimmen Sie deren Verwendung zu.
          <router-link to="/datenschutz">Datenschutzerklärung</router-link>
        </p>
        <div class="options">
          <router-link class="settings" to="">Einstellungen</router-link>
          <div class="buttons">
            <button id="cookie-refuse">Alle Ablehnen</button>
            <button id="cookie-confirm" @click="acceptCookies=true"> ZUSTIMMEN </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: "CookiesComponent",
  data(){
    return {
      acceptCookies: false,
    }
  }
}
</script>

<style scoped>
.banner{
  position: fixed;
  min-height: 60px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  bottom: 0;
  z-index: 15;
  width: calc(100% - 60px);
  padding: 20px 30px;
  display: flex;
  place-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

p.text{
  font-size: 14px;
  flex: 1 1 600px;
}
.options {
  display: flex;
  place-items: center;
  flex-wrap: wrap-reverse;
  gap: 10px;
  flex: 1 1 300px;
  margin-left: auto;
  max-width: 520px;
}

.options a{
  color: var(--color-palette-1-D);
  margin: 0 auto;
  text-align: center;
}

.buttons{
  flex: 1 1 400px;
  display: flex;
  place-items: center;
  gap: 10px;
}
button{
  padding: 10px 20px;
  width: 100%;
}

#cookie-confirm{
  background-color: var(--color-palette-1-D);
  color: white;
  font-weight: bold;
  letter-spacing: 1.5px;
  transition: letter-spacing 0.4s;
}

#cookie-confirm:hover{
  letter-spacing: 0;
}

</style>