<template>
  <BaseLayout v-bind:show-footer="true">
    <template v-slot:version>
      {{ $version }}
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/layouts/BaseLayout.vue";

export default {
  components: {
    BaseLayout
  }
};
</script>
