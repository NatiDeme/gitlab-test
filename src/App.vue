<template>
  <main class="flex">
    <NavBar />
    <Home msg="Nav bar" />
    <div class="flex justify-center w-full"></div>
  </main>
</template>

<script>
import Home from "./components/Home.vue";
import NavBar from "./components/Navbar.vue";
// import { routes } from "./Routers";
export default {
  name: "App",
  components: {
    Home,
    NavBar,
  },
  data() {
    return {
      // routes,
    };
  },
};
</script>

<style></style>
