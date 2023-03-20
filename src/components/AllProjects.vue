<template>
  <div>
    <div
      v-for="project in getAllProjects"
      :key="project.id"
      class="flex justify-around mt-10"
    >
      <div class="flex items-start gap-2 w-64">
        <div class="flex justify-center bg-gray-200 rounded-lg text-lg p-4">
          <p>
            {{ project.path.split("")[0].toUpperCase() }}
          </p>
        </div>

        <p>{{ project.namespace.name }} / {{ project.path }}</p>
        <GlobSVG />
      </div>
      <div class="lg:flex items-center gap-2 hidden">
        <StarSVG />
        <ShareSVG />
      </div>
      <div class="hidden lg:block">
        <p class="text-gray-500">updated now</p>
      </div>
      <hr />
    </div>
    <!-- <button type="button" @click="nati">asdasd</button> -->
  </div>
</template>

<script>
import GlobSVG from "@/assets/icons/GlobSVG.vue";
import StarSVG from "@/assets/icons/StarSVG.vue";
import ShareSVG from "@/assets/icons/ShareSVG.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    StarSVG,
    GlobSVG,
    ShareSVG,
  },
  // data() {
  //   return {
  //     projects: [],
  //   };
  // },
  computed: {
    ...mapGetters(["getAllProjects"]),
  },
  mounted() {
    this.fetchAllProjects();
    // console.log(Object.assign([], this.getAllProjects));
    // console.log(this.allProjects);
  },
  methods: {
    ...mapActions(["fetchAllProjects"]),
  },
};
</script>
