<template>
  <div class="filter-block">
    <h5 class="title">{{ filter.name }}</h5>
    <div class="filter-block-btns">
      <FilterButtons
        v-for="(btn, index) in filter.structurу"
        :key="index"
        :filterItem="btn"
      ></FilterButtons>
    </div>
  </div>
</template>

<script>
import FilterButtons from "@/components/FilterButtons";

export default {
  components: { FilterButtons },
  props: {
    filter: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 16px;
  color: #a5a5a5;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 12px;
}
.filter-block {
  padding-top: 25px;
  &-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
