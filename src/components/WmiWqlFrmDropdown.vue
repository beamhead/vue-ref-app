<template>

  <b-select :loading="isLoading" v-on:input="onChange" placeholder="Välj WQL!" v-model="selected" >
    <option
        v-for="q in wql"
        v-bind:value="q.id"
        :key="q.id">
        {{q.query}}
    </option>
  </b-select>

</template>

<script>
//https://www.developerdrive.com/2017/07/creating-a-data-table-in-vue-js/
// api-client - is an alias
import API from "api-client/wmiWQL.js";

export default {
  name: "WmiWqlFrmDropdown",
     props: {
    wmiclass: {
      type: String,
      required: true,
      default: 'Lucas'
   }
  },
  data() {
    return {
      selected: null,
      wql: [],
      errors: [],
      isLoading: false,
      isFullPage: false
    };
  },
    watch: {
    // Whenever the wmiclass prop changes, fetch new data
    wmiclass(wmiclass) {
      this.isLoading = true;
      this.wql = [];
      // Fetch data
       console.log("Fetch data for: "+wmiclass);
      API.fetchWQL(wmiclass)
      .then(data => {
         console.log("Fetched: "+data.wql[0].query);
        this.wql = data.wql;
      })
      .catch(e => {
        this.errors.push(e);
      })
      .finally(() => {
        this.isLoading = false;
      }); 
    }
  },
  methods: {
      onChange() {
        //console.log(this.selected)
				this.$emit("setSelectedWqlOption", this.selected);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>