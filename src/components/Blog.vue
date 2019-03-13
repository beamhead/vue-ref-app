<template>
  <div>
    <b-loading
      :is-full-page="isFullPage"
      :active.sync="isLoading"
      :can-cancel="true"
    ></b-loading>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" :key="post.id">
        <p>
          <strong>{{ post.title }}</strong>
        </p>
        <p>{{ post.body }}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error.id">
        <span class="has-text-danger">{{ error.message }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
//import API from "@/services/blog.js";
import API from "api-client/blog.js";

export default {
  name: "Blog",
  data() {
    return {
      posts: [],
      errors: [],
      isLoading: true,
      isFullPage: false
    };
  },
  // Fetches posts when the component is created.
  created() {
    API.fetchPosts()
      .then(posts => {
        this.posts = posts;
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
li {
  margin-top: 30px;
}
</style>
