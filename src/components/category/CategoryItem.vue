<template>
  <div class="category__item">
    <img :src="`${categoryName.image}`" alt="" />
    {{ categoryName.name }}
  </div>
</template>

<script>
export default {
  props: {
    categoryName: Object,
  },
};
</script>

<style scoped lang="scss">
.category__item {
  height: 105px;
  max-width: 117px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  color: #191919;
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 35px;
  background-color: #fff;
  &:first-child {
    color: #e23535;
  }
  &:hover {
    background-color: rgba($color: #ccc, $alpha: 0.3);
  }
}
</style>
