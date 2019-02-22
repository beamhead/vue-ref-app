<template>
  <div>
    <vue-headful title="Inspect - tabeller" description="" />
    <h1 class="title">Exempelsida för tabeller</h1>
    <h1 class="subtitle">Enkel tabell</h1>
    <Table />
    <hr />
    <h1 class="subtitle">Avancerad tabell</h1>
    <TableAdvanced />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table.vue";
import TableAdvanced from "@/components/TableAdvanced.vue";

export default {
  name: "ExTables",
  components: {
    Table,
    TableAdvanced
  }
};
</script>
