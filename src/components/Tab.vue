<template>
  <div v-if="isSelected" class="">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
    },
  },
};
</script>
