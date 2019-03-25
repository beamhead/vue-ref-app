<template>
  <div>
    <vue-headful title="Inspect - WMI" description="" />
    <h1 class="title">WMI</h1>
    <WmiBattery />
  </div>
</template> 

<script>
// @ is an alias to /src
import WmiBattery from "@/components/WmiBattery.vue";

export default {
  name: "WmiViewer",
  components: {
    WmiBattery
  }
};
</script>