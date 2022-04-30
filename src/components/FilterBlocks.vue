<template>
  <FilterBlock
    v-for="filter in filterBlock.filterProduct"
    :key="filter.name"
    :filter="filter"
  ></FilterBlock>
</template>

<script>
import FilterBlock from "@/components/FilterBlock";

export default {
  components: { FilterBlock },
  props: {
    filterBlock: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss"></style>
