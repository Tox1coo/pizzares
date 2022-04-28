<template>
  <div class="app">
    <div class="container">
      <CategoryList :categoryList="categoryList"></CategoryList>
      <StocksList></StocksList>
      <FormCity></FormCity>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CategoryList from "@/components/category/CategoryList";
import StocksList from "@/components/stocks/StocksList";
export default {
  name: "Home",
  components: { CategoryList, StocksList },
  date() {
    return {
      data: 0,
    };
  },
  created() {
    this.fetchCategory();
    this.fetchCity();
  },
  mounted() {
    setTimeout(() => {
      this.fetchCategoryImage(this.categoryList);
    }, 650);
  },
  methods: {
    ...mapActions({
      fetchCity: "city/fetchCity",
      fetchCategory: "category/fetchCategory",
      fetchCategoryImage: "category/fetchCategoryImage",
    }),
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.category.categoryList,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
