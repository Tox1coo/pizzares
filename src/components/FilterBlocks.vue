<template>
  <FilterBlock
    v-for="filter in filterBlock.filterProduct"
    :key="filter.name"
    :filter="filter"
    @allActiveFilter="getAciveFilter"
  ></FilterBlock>
  <button @click="checkProduct()">Проверка</button>
</template>

<script>
import FilterBlock from "@/components/FilterBlock";
import { mapState, mapMutations } from "vuex";

export default {
  components: { FilterBlock },
  data() {
    return {
      allFilter: [],
    };
  },
  props: {
    filterBlock: {
      type: Object,
    },
  },
  methods: {
    ...mapMutations({
      setProductList: "product/setProductList",
    }),

    getAciveFilter(item, active) {
      if (active === false) {
        const index = this.allFilter.indexOf(item);
        if (index !== -1) {
          this.allFilter.splice(index, 1);
        }
      } else {
        this.allFilter.push(item);
      }
    },

    checkProduct() {
      let copyProduct;
      const allId = [];
      if (this.allFilter.length > 0) {
        copyProduct = this.copyProductList.filter((item) => {
          if (
            item.category === this.filterBlock.productName &&
            this.allFilter.length != 0
          ) {
            const item2 = item?.structurу;
            return !this.allFilter.every((filter) => item2.includes(filter));
          }
        });
        copyProduct.forEach((element) => {
          allId.push(element.id);
        });
        const item = this.copyProductList.filter((item) =>
          allId.every((filter) => item.id != filter)
        );
        this.setProductList(item);
      } else {
        this.setProductList(this.copyProductList);
      }
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

<style scoped lang="scss"></style>
можно сделтаь масссив по findIndex, как я это делал в таблице жесткост в
курсаче. Затем можно проверять. если -1, то выводить именно эти продукты
