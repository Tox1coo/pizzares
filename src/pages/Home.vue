<template>
  <CategoryList :categoryList="categoryList"></CategoryList>
  <StocksList></StocksList>
  <FormCity></FormCity>
  <ListProducts
    v-for="category in categoryForProducts"
    :key="category.name"
    :productList="getProductList(category.name)"
    :categoryName="category.name"
  ></ListProducts>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import CategoryList from "@/components/category/CategoryList";
import StocksList from "@/components/stocks/StocksList";
import ListProducts from "@/components/products/ListProducts";

export default {
  name: "Home",
  components: { CategoryList, StocksList, ListProducts },
  date() {
    return {
      data: 0,
    };
  },
  created() {
    this.fetchCategory();
    this.fetchCity();
    this.fetchProducts();
  },
  mounted() {
    setTimeout(() => {
      this.fetchCategoryImage(this.categoryList);
      this.fetchProductImage(this.productList);
    }, 650);
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
      console.log(category);
      return this.getProductListinCategory(category);
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.category.categoryList,
      categoryForProducts: (state) => state.category.categoryForProducts,

      productList: (state) => state.product.productList,
      isLoading: (state) => state.product.isLoading,
    }),
    ...mapGetters({
      getProductListinCategory: "product/getProductListinCategory",
    }),
  },
};
</script>

<style scoped lang="scss"></style>
