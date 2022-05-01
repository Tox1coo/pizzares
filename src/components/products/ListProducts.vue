<template>
  <div class="products">
    <div class="products__header">
      <h2>{{ categoryName }}</h2>
      <FilterButton
        @click="$emit('update:showFilter', true), setFilterList(categoryName)"
        v-if="categoryName == 'Пицца' || categoryName == 'Суши'"
      ></FilterButton>
    </div>
    <div class="products__list">
      <ProductsItem
        v-for="productItem in productList"
        :key="productItem.id"
        :productItem="productItem"
      ></ProductsItem>
    </div>
  </div>
</template>

<script>
import ProductsItem from "@/components/products/ProductsItem";
import { mapMutations } from "vuex";

export default {
  components: { ProductsItem },
  props: {
    productList: {
      type: Array,
      required: true,
    },
    filter: {
      type: Object,
    },
    categoryName: {
      type: String,
      required: true,
    },
    showFilter: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations({
      setFilterList: "product/setFilterList",
    }),
  },
  computed: {
    /*     ...mapGetters({
      getProductsListBeforeFilter: "product/getProductsListBeforeFilter",
    }), */
  },
};
</script>

<style scoped lang="scss">
.products {
  margin: 30px 0 46px 0;
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 40px;
    }
  }
}
</style>
@click=" visibleFilter, getProductsListBeforeFilter(filter[0].filterProduct) "
