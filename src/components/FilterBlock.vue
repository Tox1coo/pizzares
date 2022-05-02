<template>
  <div class="filter-block">
    <h5 class="title">{{ filter.name }}</h5>
    <div class="filter-block-btns">
      <FilterButtons
        @addFilter="add"
        @click="$emit('addFilter', btn)"
        v-for="btn in filter.structurу"
        :key="btn"
        :activeBtn="activeBtn"
        @setActive="$emit('setActive', true)"
        :filterItem="btn"
      ></FilterButtons>
    </div>
  </div>
</template>

<script>
import FilterButtons from "@/components/FilterButtons";

export default {
  components: { FilterButtons },
  data() {
    return { active: false, allFilter: [] };
  },
  emits: ["setActive", "allActiveFilter", "addFilter"],

  props: {
    filter: {
      type: Object,
    },
    activeBtn: Boolean,
  },
  methods: {
    add(item, active) {
      this.$emit("allActiveFilter", item, active);
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
