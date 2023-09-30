<template>
  <div id="create-fluffy-input-details-component">
    <div class="input-content">
      <div class="input-item">
        <span class="name">Name</span>
        <input type="text" v-model="newFluffy.name">
      </div>
      <div class="input-item">
        <span class="name">Geschlecht</span>
        <Multiselect
            v-model="newFluffy.gender"
            :options="['Männlich', 'Weiblich', 'Unbekannt']"
        />
      </div>
      <div class="input-item">
        <span class="name">Merkmale</span>
        <Multiselect
            v-model="newFluffy.characteristics"
            mode="tags"
            :close-on-select="false"
            :searchable="true"
            :create-option="true"
            :options="selectableCharacteristics"
            :alt="'Keine weiteren merkmale gefunden'"
        />
      </div>
      <div class="input-item">
        <span class="name">Beschreibung</span>
        <textarea v-model="newFluffy.description"></textarea>
      </div>
      <div class="input-item">
        <span class="name">Erhalten am</span>
        <VueDatePicker v-model="newFluffy.receivedAt"></VueDatePicker>
      </div>
    </div>

    <div class="submit-button">
      <button @click="createFluffly">Fluffy erstellen</button>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
export default {
  name: "CreateFluffyInputDetailsComponent",
  components: {
    Multiselect,
    VueDatePicker
  },
  data(){
    return {
      selectedGender: null,
      selectedReceivedAt: null,
      selectedDescripton: "",
      selectedCharacteristics: [],
    }
  },
  computed: {
    newFluffy(){
      return this.$store.getters['adminFluffyCreate/newFluffy'];
    },
    selectableCharacteristics(){
      return this.$store.getters['adminFluffyCreate/selectableCharacteristics']
    }
  },
  methods: {
    async createFluffly(){
      try{
        await this.$store.dispatch('adminFluffyCreate/create');
      }catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.selectedGender = this.$store.getters['adminFluffyCreate/gender'];
    this.selectedDescripton = this.$store.getters['adminFluffyCreate/description'];
    if(this.$store.getters['adminFluffyCreate/receivedAt']){
      this.selectedReceivedAt = this.$store.getters['adminFluffyCreate/receivedAt'];
    }
    this.selectedCharacteristics = this.$store.getters['adminFluffyCreate/characteristics'];
  },
  watch: {
    selectedGender(newVal){
      this.$store.commit('adminFluffyCreate/SET_GENDER', newVal);
    },
    selectedCharacteristics(newVal){
      this.$store.commit('adminFluffyCreate/SET_CHARACTERISTICS', newVal);
    },
    selectedDescripton(newVal){
      this.$store.commit('adminFluffyCreate/SET_DESCRIPTION', newVal);
    },
    selectedReceivedAt(newVal){
      this.$store.commit('adminFluffyCreate/SET_RECEIVED_AT', newVal);
    },
  }
}
</script>

<style>
.multiselect{
  border-radius: 15px !important;
}
.multiselect-tags-search:focus{
  outline: none !important;
}
.multiselect, .multiselect-options, .multiselect-option{
  font-size: 14px !important;
  border-radius: 15px !important;
  scrollbar-width: thin !important;
}
.multiselect{
  padding: 5px !important;
}
.multiselect-tag{
  background: var(--color-palette-1-D) !important;
  border-radius: 10px !important;
}
.multiselect-option.is-selected.is-pointed, .multiselect-option.is-selected {
  background: var(--color-palette-1-D) !important;
}

.dp__main input{
  font-family: Poppins;
  font-size: 14px;
}
</style>

<style scoped>
@import "@vueform/multiselect/themes/default.css";

#create-fluffy-input-details-component{
  width: 100%;
  flex: 1 1 400px;
}

.input-item{
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.submit-button{
  position: sticky;
  bottom: 30px;
  margin-top: 20px;
  width: 100%;

  display: flex;
  justify-content: flex-end;
}


</style>