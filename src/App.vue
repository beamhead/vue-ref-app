<template>
  <BaseLayout v-bind:show-footer="true">
    <template v-slot:version>
      {{ $version }}   {{ $FM_API }}
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
