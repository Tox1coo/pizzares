<template>
  <div v-if="isLoading" class="main">
    <CategoryList :categoryList="categoryList"></CategoryList>
    <StocksList></StocksList>
    <FormCity></FormCity>
    <ListProducts
      v-for="category in category"
      :key="category"
      :productList="getProductList(category)"
      :categoryName="category"
    ></ListProducts>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import CategoryList from "@/components/category/CategoryList";
import StocksList from "@/components/stocks/StocksList";
import ListProducts from "@/components/products/ListProducts";

export default {
  name: "Home",
  components: { CategoryList, StocksList, ListProducts },

  created() {
    this.fetchCategory();
    this.fetchCity();
    this.fetchProducts();
  },
  mounted() {
    setTimeout(() => {
      this.fetchCategoryImage(this.categoryList);
      this.fetchProductImage(this.productList);
    }, 750);
  },
  methods: {
    ...mapActions({
      fetchCity: "city/fetchCity",

      fetchCategory: "category/fetchCategory",
      fetchCategoryImage: "category/fetchCategoryImage",

      fetchProductImage: "product/fetchProductImage",
      fetchProducts: "product/fetchProducts",
    }),
    getProductList(category) {
      return this.getProductListinCategory(category);
    },
    getFilterList(category) {
      return this.getFilterProductList(category);
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.category.categoryList,

      category: (state) => state.product.category,
      productList: (state) => state.product.productList,
      isLoading: (state) => state.product.isLoading,
      filterProduct: (state) => state.product.filterProduct,
    }),
    ...mapGetters({
      getProductListinCategory: "product/getProductListinCategory",
      getFilterProductList: "product/getFilterProductList",
      getProductsListBeforeFilter: "product/getProductsListBeforeFilter",
    }),
  },
};
</script>

<style scoped lang="scss"></style>
