<template>
  <div id="currencyID">
    <b-loading
      :is-full-page="isFullPage"
      :active.sync="isLoading"
      :can-cancel="true"
    ></b-loading>
    <h1 class="subtitle">Bitcoin Price Index</h1>
    <div v-for="currency in currencys" class="currency" :key="currency.id">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span
        >{{ currency.rate_float | currencydecimal }}
      </span>
    </div>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error.id">
        <span class="has-text-danger">{{ error.message }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
//import API from "@/services/currency.js";
//import API from "@/services/mocks/currency.js";
import API from "api-client/currency.js";

export default {
  name: "Currency",
  data() {
    return {
      currencys: [],
      errors: [],
      isLoading: true,
      isFullPage: false
    };
  },
  // Fetches posts when the component is created.
  created() {
    API.fetchBitCoin()
      .then(data => {
        this.currencys = data;
      })
      .catch(e => {
        this.errors.push(e);
      })
      .finally(() => {
        this.isLoading = false;
      });

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
};
</script>

<style scoped>
#currencyID {
  margin: 30px;
  text-align: center;
}
</style>
