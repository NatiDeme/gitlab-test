<template>
  <main class="flex">
    <Home msg="Nav bar" />
    <div class="flex justify-center w-full"></div>
  </main>
</template>

<script>
import Home from "./components/Home.vue";
// import { routes } from "./Routers";
export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      // routes,
    };
  },
};
</script>

<style></style>
