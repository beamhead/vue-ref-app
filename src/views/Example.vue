<template>
  <div class="examples">
    <vue-headful title="Inspect - API-anrop" description="" />
    <h1 class="title">Exempelsida för API-anrop</h1>
    <Currency />
    <Blog />
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from "@/components/Blog.vue";
import Currency from "@/components/Currency.vue";

export default {
  name: "examples",
  components: {
    Currency,
    Blog
  }
};
</script>
