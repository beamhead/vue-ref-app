<template>

  <b-select :loading="isLoading" v-on:input="onChange" placeholder="Välj WMI!" v-model="selected" >
    <option
        v-for="wmiclass in classes"
        v-bind:value="wmiclass.class"
        :key="wmiclass.id">
        {{wmiclass.class}}
    </option>
  </b-select>

</template>

<script>
//https://www.developerdrive.com/2017/07/creating-a-data-table-in-vue-js/
// api-client - is an alias
import API from "api-client/wmiClasses.js";

export default {
  name: "WmiClassesFrmDropdown",
  data() {
    return {
      selected: null,
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
      onChange() {
        //console.log(this.selected)
				this.$emit("setSelectedOption", this.selected);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>