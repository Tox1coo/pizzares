<template>
  <div class="out" @click.stop="hideFilter">
    <div class="filter" @click.stop v-show="show">
      <div class="filter__item head">
        <h2>Фильтры</h2>
        <div class="head__item">
          <div @click="hideFilter" class="close">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="filter__item-desc">
        <FilterBlocks
          v-for="(filter, index) in filterList"
          :key="index"
          :filterBlock="filter"
          @getActiveFilter="allActiveFilter"
          @setActive="getActive"
          :active="active"
          :allFilters="allFilter"
        ></FilterBlocks>
      </div>
      <div class="filter__item-btns">
        <MyButton @click="clearFilter" class="filter-btn background"
          >Сбросить
        </MyButton>

        <MyButton @click="checkProduct(), hideFilter()" class="filter-btn"
          >Применить
        </MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBlocks from "@/components/FilterBlocks";
import { mapState, mapMutations } from "vuex";

export default {
  components: { FilterBlocks },
  props: {
    show: { type: Boolean, default: false },
    filterList: {
      type: Array,
    },
  },
  emits: ["update:show"],
  data() {
    return {
      allFilter: [],
      productName: "",
      active: true,
    };
  },
  methods: {
    ...mapMutations({ setProductList: "product/setProductList" }),
    clearFilter() {
      this.setProductList(this.copyProductList);
      this.active = false;
      this.allFilter = [];
    },
    hideFilter() {
      this.$emit("update:show", false);
    },
    allActiveFilter(item, active, allFilter, productName) {
      this.allFilter = allFilter;
      this.productName = productName;
    },
    checkProduct() {
      console.log(this.allFilter);
      let copyProduct;
      const allId = [];
      if (this.allFilter.length > 0) {
        copyProduct = this.copyProductList.filter((item) => {
          if (
            item.category === this.productName &&
            this.allFilter.length != 0
          ) {
            const item2 = item?.structurу;
            return !this.allFilter.every((filter) => item2.includes(filter));
          }
        });
        copyProduct.forEach((element) => {
          allId.push(element.id);
        });
        const filter = this.copyProductList.filter((item) =>
          allId.every((filter) => item.id != filter)
        );
        this.setProductList(filter);
      } else {
        this.setProductList(this.copyProductList);
      }
    },
    getActive(active) {
      this.active = active;
    },
  },
  computed: {
    ...mapState({
      productList: (state) => state.product.productList,
      copyProductList: (state) => state.product.copyProductList,
    }),
  },
};
</script>

<style scoped lang="scss">
.filter {
  z-index: 1000;
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
  z-index: 1000;

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
