<template>
  <div>
    <div class="flex flex-col lg:items-center w-screen mt-10 ml-5">
      <h1 class="font-bold text-3xl">Explore GitLab</h1>
      <p class="hidden lg:block">
        Discover projects,groups and snippets. Share your projects with others
      </p>
    </div>
    <TableHeadline class="mt-6" />
    <AllProjects />
  </div>
</template>

<script>
import TableHeadline from "./TableHeadline.vue";
import AllProjects from "./AllProjects.vue";
export default {
  name: "HelloWorld",
  components: {
    TableHeadline,
    AllProjects,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
