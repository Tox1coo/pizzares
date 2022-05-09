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
    <ModalAuth v-model:show="show">
      <LoginUser
        v-model:show="show"
        v-model:visibleModalLogin="visibleModalLogin"
        v-if="visibleModalLogin"
      ></LoginUser>
      <AuthUser
        v-model:show="show"
        v-model:visibleModalLogin="visibleModalLogin"
        v-else
      ></AuthUser>
    </ModalAuth>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import CategoryList from "@/components/category/CategoryList";
import StocksList from "@/components/stocks/StocksList";
import ListProducts from "@/components/products/ListProducts";
import LoginUser from "@/components/user/LoginUser";
import AuthUser from "@/components/user/AuthUser";

export default {
  name: "Home",
  components: { CategoryList, StocksList, ListProducts, LoginUser, AuthUser },
  data() {
    return {
      show: false,
      visibleModalLogin: true,
    };
  },
  created() {
    this.fetchCategory();
    this.fetchCity();
    this.fetchProducts();
  },
  mounted() {
    setTimeout(() => {
      if (this.isLoading) {
        this.fetchCategoryImage(this.categoryList);
        this.fetchProductImage(this.productList);
      }
    }, 700);
  },
  methods: {
    ...mapMutations({
      setVisibleModal: "auth/setVisibleModal",
    }),
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

      visibleModal: (state) => state.auth.visibleModal,
    }),
    ...mapGetters({
      getProductListinCategory: "product/getProductListinCategory",
      getFilterProductList: "product/getFilterProductList",
      getProductsListBeforeFilter: "product/getProductsListBeforeFilter",
    }),
  },
  watch: {
    visibleModal(visible) {
      this.show = visible;
    },
    show(notVisible) {
      this.setVisibleModal(notVisible);
    },
  },
};
</script>

<style scoped lang="scss"></style>
