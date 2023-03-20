<template>
  <div>
    <div
      v-for="project in projects"
      :key="project.id"
      class="flex justify-around mt-10"
    >
      <div class="flex items-center gap-4">
        <div class="flex justify-center bg-gray-200 w-10 rounded-lg text-lg">
          <p class="">
            {{ project.name.split("")[0].toUpperCase() }}
          </p>
        </div>

        <p>{{ project.name }} / {{ project.path_with_namespace }}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </div>
      <div class="lg:flex items-center gap-2">
        <StarSVG />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      </div>
      <div class="hidden lg:block">
        <p class="text-gray-500">updated now</p>
      </div>
    </div>
    <button type="button" @click="nati">asdasd</button>
  </div>
</template>

<script>
import StarSVG from "@/assets/StarSVG.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    StarSVG,
  },
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    ...mapActions(["getText"]),
    ...mapGetters(["text"]),
    loadNow() {
      return this.getText;
    },
  },
  methods: {
    async nati() {
      let me = await this.getText;
      this.projects = me;
    },
  },
};
</script>
