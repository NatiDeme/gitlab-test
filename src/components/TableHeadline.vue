<template>
  <div>
    <TableInputsTop />
    <div class="flex lg:justify-around justify-start pl-6 mb-3 mt-6">
      <div class="">
        <ul class="flex gap-4">
          <li>All</li>
          <li>Most start</li>
          <li>Trending</li>
        </ul>
      </div>

      <TableInputsBot />
    </div>
    <hr class="mx-5 lg:mx-52" />
  </div>
</template>

<script>
import TableInputsTop from "./TableInputs/TableInputsTop.vue";
import TableInputsBot from "./TableInputs/TableInputsBot.vue";

export default {
  name: "HelloWorld",
  components: { TableInputsTop, TableInputsBot },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
