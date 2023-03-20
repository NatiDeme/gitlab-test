<template>
  <div>
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
