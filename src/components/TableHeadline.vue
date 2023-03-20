<template>
  <div>
    <TableInputsTop />
    <div class="flex lg:justify-around justify-start pl-6 mb-3 mt-6">
      <div class="">
        <ul class="flex gap-4">
          <li v-for="tab in tabs" :key="tab">
            <a @click="setTab(tab)" :class="{ active: tab === selected }">
              {{ tab }}</a
            >
          </li>
        </ul>
      </div>

      <TableInputsBot />
    </div>
    <hr class="mx-5 lg:mx-52" />
    <slot />
  </div>
</template>

<script>
import TableInputsTop from "./TableInputs/TableInputsTop.vue";
import TableInputsBot from "./TableInputs/TableInputsBot.vue";

export default {
  name: "HelloWorld",
  components: { TableInputsTop, TableInputsBot },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  border-bottom: #292961;
  border-bottom: solid 1px;
  padding-bottom: 1rem;
  border-bottom-width: 0.2rem;
}
</style>
