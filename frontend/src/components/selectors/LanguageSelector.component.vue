<template>
  <div id="language-selector-component">
    <select v-model="selected" @change="select(selected)">
      <option v-for="lang in languages" :key="lang.id" :value="lang">{{ lang.short }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LanguageSelectorComponent",
  computed: {
    languages() {
      return this.$store.getters['language/list'];
    },
    currentLanguage(){
      return this.$store.getters['language/current'];
    }
  },
  data() {
    return {
      selected: null, // Ändere den initialen Wert auf null
    }
  },
  mounted() {
    if(!this.currentLanguage){
      this.select(this.languages[0]);
    }
    this.selected = this.$store.getters['language/current'];
  },
  methods: {
    select(lang) {
      this.$store.dispatch('language/select', lang);
    }
  },
  watch: {
    currentLanguage(newVal){
      this.selected = newVal;
    }
  }
}
</script>

<style scoped>
select, option {
  background-color: #cbcbcb;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
}

option {
  background-color: transparent !important;
}
</style>
