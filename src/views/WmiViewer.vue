<template>
  <div >
    <vue-headful title="Inspect - WMI" description="" />

         <div class="columns">
          <div class="column">
            <h1 class="title">WMI Viewer</h1>
          </div>
          <div class="column">
            <b-input maxlength="30" placeholder="Datorbeteckning" v-model="computer"></b-input>
          </div>
          <div class="column">
            <WmiClassesFrmDropdown v-on:setSelectedOption="setWMIClass"/>
          </div>
          <div class="column">
            <WmiWqlFrmDropdown v-bind:wmiclass="selectedWMIClass" v-on:setSelectedWqlOption="setWQL"/>
          </div>
        </div>
    
    <hr style="clear:both">
    <WmiDataTable v-bind:wmi="selectedWQL"/>
  </div>
</template> 

<script>
// @ is an alias to /src
import WmiClassesFrmDropdown from "@/components/WmiClassesFrmDropdown.vue";
import WmiWqlFrmDropdown from "@/components/WmiWqlFrmDropdown.vue";
import WmiDataTable from "@/components/WmiDataTable.vue";

export default {
  name: "WmiViewer",
  data() {
    return {
      computer : '',
      selectedWMIClass: '',
      selectedWQL: ''
    };
  },
  components: { 
    WmiClassesFrmDropdown,
    WmiWqlFrmDropdown,
    WmiDataTable,
  }, methods: {
      setWMIClass(e) {
        this.selectedWMIClass = e;
        //console.log("setWMIClass: " + this.selectedWMIClass);
      },
      setWQL(e) {
        //this.selectedWQL = e;
        this.selectedWQL = this.selectedWMIClass + ";" + e;
        console.log("selectedWQL: " + this.selectedWQL);
      }
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>