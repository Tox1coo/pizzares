<template>
  <div class="products">
    <div class="products__header">
      <h2>{{ categoryName }}</h2>
      <FilterButton
        v-if="categoryName == 'Пицца' || categoryName == 'Суши'"
      ></FilterButton>
    </div>
    <div class="products__list">
      <ProductsItem
        v-for="productItem in productList"
        :key="productItem.name"
        :productItem="productItem"
      ></ProductsItem>
    </div>
  </div>
</template>

<script>
import ProductsItem from "@/components/products/ProductsItem";
export default {
  components: { ProductsItem },
  props: {
    productList: {
      type: Array,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
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
  }
}
</style>
