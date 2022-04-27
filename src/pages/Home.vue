<template>
  <div class="app">
    <div class="container">
      <CategoryList :categoryList="categoryList"></CategoryList>
      <StocksList></StocksList>
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
  mounted() {
    this.fetchCategory();
    this.fetchCity();
  },
  methods: {
    ...mapActions({
      fetchCity: "city/fetchCity",
      fetchCategory: "category/fetchCategory",
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
