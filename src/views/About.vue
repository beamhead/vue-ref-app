<template>
  <div class="about">
    <vue-headful title="Inspect - About" description="" />

    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li class="is-active"><router-link to="/about">About</router-link></li>
      </ul>
    </nav>

    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

console.log(this.$FM_API)

export default {
  name: "about",
  components: {
    HelloWorld
  }
};
</script>
