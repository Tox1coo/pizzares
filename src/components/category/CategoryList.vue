<template>
  <div class="category">
    <CategoryItem
      v-for="categoryItem in categoryList"
      :key="categoryItem"
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
