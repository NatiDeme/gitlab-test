<template>
  <div class="bg-[#292961] h-12 flex items-center justify-between w-screen">
    <div
      class="flex gap-5 items-center justify-between lg:justify-start w-full mr-2"
    >
      <img src="../assets/gitlab-logo-500.png" alt="main-logo" class="h-14" />
      <div class="flex items-center gap-3">
        <span class="text-white lg:hidden">Menue</span>
        <HamBurger />
      </div>
      <input
        type="text"
        class="bg-white bg-opacity-40 h-8 rounded-md border-2 border-gray-50 pl-2 hidden lg:block"
        placeholder="Search GitLab"
      />
    </div>
    <NavDesktopIcons />
  </div>
</template>

<script>
import HamBurger from "@/assets/HamBurger.vue";
import NavDesktopIcons from "./NavDesktopIcons.vue";

export default {
  name: "NavBar",
  components: {
    HamBurger,
    NavDesktopIcons,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
