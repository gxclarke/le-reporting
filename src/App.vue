<template>
  <Dashboard />
  <Comments msg="Comments" />
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Comments from "./components/Comments.vue";
export default {
  name: "App",
  components: {
    Dashboard,
    Comments,
  },
};
</script>

