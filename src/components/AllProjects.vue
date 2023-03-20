<template>
  <div>
    <div
      v-for="project in projects"
      :key="project.id"
      class="lg:grid grid-cols-12 px-4 mt-10 border-b border-gray-300 pb-3 lg:mx-20 mx-1"
    >
      <div class="flex gap-3 items-center text-sm shrink-0 col-span-6">
        <div class="flex justify-center bg-gray-200 rounded-lg text-lg p-4">
          <p>
            {{ project.path.split("")[0].toUpperCase() }}
          </p>
        </div>
        <div class="flex space-x-1 flex-wrap">
          <p class="text-gray-500">{{ project.namespace.name }} /</p>
          <p class="font-medium">{{ project.path }}</p>
          <GlobSVG />
        </div>
      </div>
      <div class="lg:flex items-center gap-2 hidden col-span-3">
        <span class="flex">
          <StarSVG />
          {{ project.star_count }}
        </span>
        <ShareSVG />
      </div>
      <div class="hidden lg:block col-span-3">
        <p class="text-gray-500">updated now</p>
      </div>
    </div>
  </div>
</template>

<script>
import GlobSVG from "@/assets/icons/GlobSVG.vue";
import StarSVG from "@/assets/icons/StarSVG.vue";
import ShareSVG from "@/assets/icons/ShareSVG.vue";

export default {
  components: {
    StarSVG,
    GlobSVG,
    ShareSVG,
  },
  props: {
    projects: {
      type: Array,
      default: null,
    },
  },
};
</script>
