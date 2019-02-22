<template>
  <div>
    <vue-headful title="Inspect - Home" description="" />
    <Dashboard>
      <template v-slot:chart>
        <div class="small">
          <line-chart :chart-data="datacollection"></line-chart>
          <button class="button is-primary" @click="fillData()">
            Randomize
          </button>
        </div>
      </template>
    </Dashboard>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";
import LineChart from "@/components/Chart.vue";

export default {
  components: {
    Dashboard,
    LineChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#ccc",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data Two",
            backgroundColor: "#eee",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
