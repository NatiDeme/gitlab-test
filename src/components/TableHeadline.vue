<template>
  <div>
    <div class="flex flex-col gap-3 lg:hidden px-5">
      <input
        type="text"
        placeholder="Filter by Name"
        class="border border-black h-9 rounded-[0.25rem] pl-1"
      />
      <select
        type="text"
        name="Language"
        id=""
        placeholder="Language"
        class="bg-transparent border border-black h-9 rounded-[0.25rem]"
      >
        <option value="Language">Language</option>
      </select>
      <select
        type="text"
        name="Language"
        id=""
        placeholder="Language"
        class="bg-transparent border border-black h-9 rounded-[0.25rem]"
      >
        <option value="Language">Updated Date</option>
      </select>
    </div>
    <div class="flex lg:justify-around justify-start pl-8 mb-3">
      <div class="">
        <ul class="flex gap-4">
          <li>All</li>
          <li>Most start</li>
          <li>Trending</li>
        </ul>
      </div>

      <div class="lg:flex gap-5 hidden">
        <input type="text" placeholder="Filter by Name" />
        <input type="text" name="" id="" placeholder="Language" />
        <input type="text" name="" id="" placeholder="Updated Date" />
      </div>
    </div>
    <hr class="mx-5" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
