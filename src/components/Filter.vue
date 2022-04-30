<template>
  <div class="out" @click.stop="hideDialog">
    <div class="filter" @click.stop v-show="show">
      <div class="filter__item head">
        <h2>Фильтры</h2>
        <div class="head__item">
          <div @click="hideDialog" class="close">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="filter__item-desc">
        <FilterBlocks
          v-for="filter in filterList"
          :key="filter"
          :filterBlock="filter"
        ></FilterBlocks>
      </div>
      <div class="filter__item-btns">
        <MyButton class="filter-btn background">Сбросить </MyButton>

        <MyButton class="filter-btn">Применить </MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBlocks from "@/components/FilterBlocks";
export default {
  components: { FilterBlocks },
  props: {
    show: { type: Boolean, default: false },
    filterList: {
      type: Array,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
    getFilterList() {
      return this.filterList[0].filterProduct;
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  flex-direction: column;
  width: 500px;
  position: relative;
  height: 100vh;
  background-color: #fff;
  &__item {
    padding: 32px 20px 0px;

    &-desc {
      flex: 1 1;
      padding: 0 0px 28px 20px;
    }
    &-btns {
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      border-top: 2px solid #f0f0f0;
    }
  }
  cursor: default;
  &-btn {
    padding: 13px 70.5px;
  }
}
.background {
  background-color: #fff;
  color: #ff7010;
  border: 1px solid #ff7010;
}
.out {
  min-width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  cursor: pointer;
}
.close {
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  span {
    display: block;
    position: absolute;
    top: 10px;
    right: -4px;
    width: 32px;
    height: 3px;
    background-color: #a5a5a5;

    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
}

.head {
  h2 {
    font-size: 32px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
