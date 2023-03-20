<template>
  <div>
    <div class="flex flex-col gap-3 lg:items-center w-screen mt-10 ml-5">
      <h1 class="font-bold text-3xl">Explore GitLab</h1>
      <p class="hidden lg:block">
        Discover projects,groups and snippets. Share your projects with others
      </p>
    </div>
    <TableHeadline
      :selected="selected"
      :tabs="['All', 'Most starred', 'Trending']"
      @selected="setSelected"
      class="mt-10"
    >
      <Tab :isSelected="selected === 'All'">
        <AllProjects :projects="getAllProjects" />
        <!-- <p>yes yes</p> -->
      </Tab>

      <Tab :isSelected="selected === 'Most starred'">
        <AllProjects :projects="getRecentProjects" />
      </Tab>

      <Tab :isSelected="selected === 'Trending'">
        <!-- <AllProjects :projects="getAllProjects" /> -->
      </Tab>
    </TableHeadline>
    <AllProjects class="mt-4" />
  </div>
</template>

<script>
import TableHeadline from "./TableHeadline.vue";
import AllProjects from "./AllProjects.vue";
import Tab from "./Tab.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  components: {
    TableHeadline,
    AllProjects,
    Tab,
  },
  data() {
    return {
      selected: "All",
    };
  },
  computed: {
    ...mapGetters(["getAllProjects", "getRecentProjects"]),
  },
  mounted() {
    this.fetchAllProjects();
    this.fetchMostRecent();
  },

  methods: {
    ...mapActions(["fetchAllProjects", "fetchMostRecent"]),
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
