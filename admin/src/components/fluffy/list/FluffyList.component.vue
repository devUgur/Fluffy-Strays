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
        </tr>
        <tr v-for="fluffy in fluffyList">
          <td>{{fluffy.name}}</td>
          <td>{{fluffy.gender}}</td>
          <td>{{generateDateString(fluffy.receivedAt)}}</td>
          <td>
            <select>
              <option v-for="image in fluffy.images">{{image}}</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import FluffyListItemComponent from "@/components/fluffy/list/FluffyListItem.component.vue";
export default {
  name: "FluffyListComponent",
  components: {
    FluffyListItemComponent
  },
  computed: {
    fluffyList(){
      return this.$store.getters['adminFluffy/list'];
    }
  },
  methods: {
    async loadFluffyList(){
      await this.$store.dispatch('adminFluffy/load');
    },
    generateDateString(dateString){
      let dateObject = new Date(dateString);
      return dateObject.toLocaleDateString();
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

  padding: 8px;
}

th:first-of-type{
  border-top-left-radius: 20px;
}
th:last-of-type{
  border-top-right-radius: 20px;
}
th {
  padding: 12px 15px 12px 5px;
  text-align: left;
  background-color: white;
  color: #2c3e50;
}

tr:nth-child(even){background-color: #f2f2f2;}
tr:hover {background-color: var(--color-palette-1-D); color: white}

</style>