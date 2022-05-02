<template>
  <FilterBlock
    v-for="filter in filterBlock.filterProduct"
    :key="filter.name"
    :filter="filter"
    @allActiveFilter="getAciveFilter"
    :activeBtn="active"
    @setActive="$emit('setActive', true)"
  ></FilterBlock>
</template>

<script>
import FilterBlock from "@/components/FilterBlock";

export default {
  components: { FilterBlock },
  data() {
    return {
      allFilter: [],
    };
  },
  emits: ["getActiveFilter", "setActive"],

  props: {
    filterBlock: {
      type: Object,
    },
    active: Boolean,
    allFilters: {
      type: Array,
    },
  },
  watch: {
    allFilters(newAllFilter) {
      console.log(newAllFilter);
      if (newAllFilter.length === 0) {
        this.allFilter = [];
      }
    },
  },
  methods: {
    getAciveFilter(item, active) {
      if (active === false) {
        const index = this.allFilter.indexOf(item);
        if (index !== -1) {
          this.allFilter.splice(index, 1);
        }
      } else {
        this.allFilter.push(item);
      }
      this.$emit(
        "getActiveFilter",
        item,
        active,
        this.allFilter,
        this.filterBlock.productName
      );
    },
  },
};
</script>

<style scoped lang="scss"></style>
можно сделтаь масссив по findIndex, как я это делал в таблице жесткост в
курсаче. Затем можно проверять. если -1, то выводить именно эти продукты
