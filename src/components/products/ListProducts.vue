<template>
  <div class="products">
    <div class="products__header">
      <h2>{{ categoryName }}</h2>
      <FilterButton
        @click="(showFilter = true), setFilterList(categoryName)"
        v-if="categoryName == 'Пицца' || categoryName == 'Суши'"
      ></FilterButton>
    </div>
    <div class="products__list">
      <ProductsItem
        v-for="productItem in productList"
        :key="productItem.id"
        :productItem="productItem"
        @visibleDialog="visibleDialog"
      ></ProductsItem>
    </div>
  </div>
  <Filter
    v-show="
      showFilter == true &&
      (categoryName === 'Пицца' || categoryName === 'Суши')
    "
    v-model:show="showFilter"
    :filterList="getProductsListBeforeFilter"
  ></Filter>
  <ModalProduct
    v-if="showDialog"
    :product="productItem"
    v-model:show="showDialog"
  ></ModalProduct>
</template>

<script>
import ProductsItem from "@/components/products/ProductsItem";
import { mapMutations, mapGetters, mapState } from "vuex";
import Filter from "@/components/Filter";

export default {
  components: { ProductsItem, Filter },
  data() {
    return { showFilter: false, showDialog: false, productItem: {} };
  },

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

  methods: {
    ...mapMutations({
      setFilterList: "product/setFilterList",
    }),
    visibleDialog(product, active) {
      console.log(this.isAuth);
      if (this.isAuth != false) {
        this.productItem = product;
        this.showDialog = active;
      } else {
        alert("Зайдите в аккаунт");
      }
    },
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
    }),
    ...mapGetters({
      getProductsListBeforeFilter: "product/getProductsListBeforeFilter",
    }),
  },
};
</script>

<style scoped lang="scss">
.products {
  margin: 30px 0 46px 0;
  min-height: 480px;
  &__list {
    display: flex;
    gap: 20px 30px;
    flex-wrap: wrap;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h2 {
      font-size: 40px;
    }
  }
}
</style>
