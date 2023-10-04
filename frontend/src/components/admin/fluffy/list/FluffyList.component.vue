<template>
  <div id="fluffy-list-component">
    <div class="title"> Fluffy Liste ({{fluffyList.length}})</div>
    <div class="list">
      <!-- <FluffyListItemComponent v-for="fluffy in fluffyList" :fluffy="fluffy" :key="fluffy._id"></FluffyListItemComponent> -->
      <table id="fluffy-list">
        <tr>
          <th>Name</th>
          <th>Geschlecht</th>
          <th>Aufgenommen am</th>
          <th>Bilder</th>
          <th class="options">Optionen</th>
        </tr>
        <tr v-for="fluffy in fluffyList" @click="selectFluffy(fluffy)" :class="{'selected': fluffy.selected}">
          <td>{{fluffy.name}}</td>
          <td>{{fluffy.gender}}</td>
          <td>{{generateDateString(fluffy.receivedAt)}}</td>
          <td>
            {{fluffy.images.length}}
          </td>
          <td class="options">
            <button @click="removeFluffy(fluffy._id)">
              <img src="@/assets/flaticons/bin.png">
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "FluffyListComponent",
  components: {

  },
  computed: {
    fluffyList(){
      return this.$store.getters['adminFluffy/list'];
    }
  },
  data(){
    return {
      selectedFluffy: null,
    }
  },
  methods: {
    async loadFluffyList(){
      await this.$store.dispatch('adminFluffy/load');
    },
    generateDateString(dateString){
      let dateObject = new Date(dateString);
      return dateObject.toLocaleDateString();
    },
    async removeFluffy(id){
      await this.$store.dispatch('adminFluffy/delete', id);
    },
    selectFluffy(fluffy){
      this.fluffyList.forEach(fluffy => fluffy.selected = null);
      fluffy.selected = true;
      this.selectedFluffy = fluffy;
      this.$store.commit('adminFluffyCreate/SET_NEW_FLUFFY', fluffy);
    }
  },
  mounted() {
    this.loadFluffyList();
  }
}
</script>


<style>
table{
  border-radius: 15px !important;
}
</style>

<style scoped>

#fluffy-list{
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;

}
td, th {
  padding: 8px 20px;
}

th:first-of-type{
  border-top-left-radius: 20px;
}
th:last-of-type{
  border-top-right-radius: 20px;
}
th {
  text-align: left;
  background-color: white;
  color: #2c3e50;
  padding: 15px 20px;
}

th.options{
  display: flex;
  justify-content: center;
}

tr.selected{
  background: var(--color-palette-1-D) !important;
  color: white !important;
}

tr:nth-child(even){background-color: #f2f2f2;}
/* Nur Zeilen ab dem zweiten tr-Element haben den Hover-Effekt */
tr:not(:first-child):hover {
  color: var(--color-palette-1-D);
}

.options img{
  height: 22px;
}
.options button{
  background-color: white;
  display: flex;
}

td.options {
  display: flex;
  place-items: center;
  justify-content: center;
}

</style>