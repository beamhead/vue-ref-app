<template>
<div id="wmiClassDropDownID">
  
  <b-dropdown hoverable aria-role="list">
      <button class="button is-info" slot="trigger">
          <span>{{caption}}</span>
          <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
          <b-icon icon="fas fa-caret-down"></b-icon>
      </button>

      <b-dropdown-item aria-role="listitem" v-for="wmiclass in classes" :key="wmiclass.id" v-model="wmiclass.class" @click="setCurrentSelectedOption(wmiclass.class);">
        {{wmiclass.class}}
      </b-dropdown-item>

  </b-dropdown>

</div>
</template>

<script>
//https://www.developerdrive.com/2017/07/creating-a-data-table-in-vue-js/
// api-client - is an alias
import API from "api-client/wmiClasses.js";

export default {
  name: "WmiClassesDropdown",
  data() {
    return {
      caption:'Välj WMI!',
      classes: [],
      errors: [],
      isLoading: true,
      isFullPage: false
    };
  },
  // Fetches posts when the component is created.
  created() {
    API.fetchClasses()
      .then(data => {
        //console.log(" ** WmiClassesDropdown:  " + data[0].class);
        this.classes = data;
      })
      .catch(e => {
        this.errors.push(e);
      })
      .finally(() => {
        this.isLoading = false;
      });
  },methods: {
			setCurrentSelectedOption(option) {
        //console.log("Dropdown: "+ option);
        this.caption = option;
				this.$emit("setSelectedOption", option);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>