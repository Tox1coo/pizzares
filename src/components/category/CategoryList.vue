<template>
  <div class="category">
    <CategoryItem
      @click="scrollToProducts(categoryItem)"
      v-for="categoryItem in categoryList"
      :key="categoryItem"
      v-once
      :categoryName="categoryItem"
    ></CategoryItem>
  </div>
</template>

<script>
import CategoryItem from "@/components/category/CategoryItem";
export default {
  components: { CategoryItem },
  props: {
    categoryList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    scrollToProducts(categoryName) {
      const product = document.getElementById(categoryName.name);
      product.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 105px;
  margin: 30px 0px;
}
</style>
