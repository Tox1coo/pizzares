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
        block: "start",
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
  flex-wrap: wrap;
  width: 100%;
  gap: 10px 0;
  margin: 30px 0px;
}
</style>
