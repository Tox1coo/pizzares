<template>
  <div class="product__item">
    <div class="product__item-photo">
      <img :src="`${productItem.image}`" :alt="productItem.title" />
      <div class="focus">
        <span>{{ productItem.focus }}</span>
      </div>
    </div>
    <h3>{{ productItem.title }}</h3>
    <p class="text">{{ productItem.structurу }}</p>
    <MyButton>Выбрать</MyButton>
    <span v-if="productItem.category === 'Пицца'"
      >от {{ productItem.price }} ₽
    </span>
    <span v-else> {{ productItem.price }} ₽ </span>
  </div>
</template>

<script>
export default {
  props: {
    productItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.product__item {
  max-height: 480px;
  min-width: 300px;
  max-width: 300px;
  margin-top: 30px;
}
</style>
