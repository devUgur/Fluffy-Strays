<template>
  <div id="donation-popup-component">
    <transition name="fade-right">
      <div class="popup" v-if="!displayed && display">
        <button class="cancel" @click="closePopup">
          <img alt="" src="@/assets/flaticons/cancel-color-1-D.png">
        </button>
        <div class="content">
          <div class="text">
            <p class="slogan">Hilf uns zu helfen</p>
            <p class="call">Selbst nur <span class="bold">5$</span> füllen schon ein paar kleine Mägen.</p>
          </div>

          <div class="options">
            <button id="donation">
              <div>spenden</div>
              <img src="@/assets/flaticons/right-circle-arrow-white.png" alt="">
            </button>
          </div>

          <p @click="closePopup" class="reform">Nein ich habe keine 5$ übrig</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DonationPopupComponent",
  data() {
    return {
      display: false,
      displayed: false,
    };
  },
  methods: {
    handleMouseLeave() {
      // Hier können Sie Ihre Logik ausführen, wenn die Maus das Fenster verlässt
      console.log("Maus hat das Fenster verlassen");
      this.display = true;
      // Beispiel: this.closePopup();
    },
    closePopup() {
      // Hier können Sie Ihre Popup schließen Logik implementieren
      this.displayed = true;
    },
  },
  mounted() {
    document.body.addEventListener("mouseleave", this.handleMouseLeave);
  },
  beforeUnmount() {
    // Stellen Sie sicher, dass Sie den Event-Listener entfernen, um Speicherlecks zu vermeiden
    document.body.removeEventListener("mouseleave", this.handleMouseLeave);
  },
};
</script>

<style scoped>
.slogan{
  font-weight: bold;
}
#donation-popup-component{}
#donation-popup-component .popup{
  position: fixed;
  left: 30px;
  top: calc(50% - 215px);
  height: 250px;
  max-width: 250px;
  width: 100%;
  background-color: white;
  box-shadow: var(--box-shadow-palette-1-A);
  z-index: 15;
  border-radius: 15px;
  padding: 20px;
}

#donation-popup-component .popup button.cancel{
  border-radius: 50%;
  display: flex;
  place-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  background: transparent;
}

#donation-popup-component .popup button.cancel img{
  height: 28px;
  border-radius: 50%;

  transition: all 0.3s ease;
}

#donation-popup-component .popup button.cancel:hover img{
  transform: scale(0.8);
  box-shadow: var(--box-shadow-palette-1-A);
}
#donation-popup-component .popup .content{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 28px);
}


#donation-popup-component .popup .content .text{
  margin-top: 20px;
}

#donation-popup-component .popup .content .call{
  max-width: 200px;
  margin: 0 auto;
}

#donation-popup-component .popup .content .call .bold{
  font-weight: bold;
}


#donation-popup-component .popup .content .reform{
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

button#donation{
  background: var(--color-palette-1-D);
  color: white;
  padding: 10px 20px;
  display: flex;
  place-items: center;
  gap: 10px;
  margin: 0 auto;
}
button#donation img{
  height: 18px;
}
</style>
