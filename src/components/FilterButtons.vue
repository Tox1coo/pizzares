<template>
  <ButtonFilter> {{ filterItem }}</ButtonFilter>
</template>

<script>
export default {
  props: {
    filterItem: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss"></style>
