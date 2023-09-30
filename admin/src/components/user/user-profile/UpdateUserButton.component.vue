<template>
  <div id="update-user-button-component">
    <transition name="fade-up">
      <button @click="updateUser()" v-if="showButton">Änderungen Speichern</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "UpdateUserButtonComponent",
  props: ['user', 'getUserById'],
  data(){
    return {
      storedUser: null,
      showButton: false, // Hinzugefügt, um den Button standardmäßig auszublenden
    }
  },
  methods: {
    async updateUser(){
      let response = await this.$store.dispatch('adminUser/update', this.user);
      if(response && response.status === 200){
        this.storedUser = JSON.stringify(response.data);
      }
      if(this.getUserById){
        await this.getUserById();
      }
    },
  },
  computed: {
    needUpdate(){
      if(this.storedUser){
        return !(JSON.stringify(this.user) === this.storedUser);
      }else{
        return false;
      }
    }
  },
  watch: {
    needUpdate(newVal){
      this.showButton = newVal; // Automatisch showButton basierend auf needUpdate aktualisieren
    },
    user(newVal){
      this.storedUser = JSON.stringify(newVal); // Aktualisierte storedUser, wenn user prop sich ändert
    }
  },
  mounted() {
    this.storedUser = JSON.stringify(this.user); // Initial storedUser setzen
    this.showButton = this.needUpdate; // Initial showButton basierend auf needUpdate setzen
  },
}
</script>


<style scoped>
#update-user-button-component{
  position: sticky;
  bottom: 30px;
}
button{
  box-shadow: var(--box-shadow-palette-1-A);
  transition: all 0.5s;
}

.fade-up-enter-active {
  transition: all 0.3s ease-out;
}

.fade-up-leave-active {
  transition: all 0.8s /*cubic-bezier(1, 0.8, 0.5, 1)*/;
}

.fade-up-enter-from,
.fade-up-leave-to {
  transform: translateY(100%); /* Ändere den Wert auf 100% */
  opacity: 0;
}
</style>