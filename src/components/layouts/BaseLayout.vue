<template>
  <div id="baselayout_id" class="baselayout">
    <BulmaNavbar />
    <div class="container is-fluid">
      <main>
        <router-view />
      </main>
    </div>
    <footer class="footer" v-if="showFooter">
      <div class="has-text-centered">
        <p>
          <router-link to="/">Inspect </router-link
          ><slot name="version">1.0.0</slot>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import BulmaNavbar from "../BulmaNavbar.vue";

export default {
  name: "BaseLayout",
  components: {
    BulmaNavbar
  },
  props: {
    showFooter: { default: true }
  }
};
</script>

<style scoped>
/*
     * Some styles so that our component
     * looks somewhat special
    */
footer {
  padding: 10px;
  margin: 0;
}
main {
  padding: 0px;
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
