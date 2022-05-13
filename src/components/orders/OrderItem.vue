<template>
  <div class="order__item">
    <div class="order__item-image">
      <img :src="orderItem.image" :alt="orderItem.title" />
    </div>
    <div class="order__item-info">
      <h3 class="order__item-info-title">{{ orderItem.title }}</h3>
      <p v-if="orderItem?.type" class="order__item-info-type">
        {{ orderItem.type }}, {{ orderItem.size }}
      </p>
      <p v-for="ingredents in orderItem.allIngredients" :key="ingredents">
        + {{ ingredents }}
      </p>
      <div class="order__item-info-bottom">
        <CounterProduct :orderItem="orderItem"></CounterProduct>
        <span>{{ orderItem.allPrice || orderItem.price }} ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
import CounterProduct from "../UI/CounterProduct.vue";
export default {
  props: {
    orderItem: {
      type: Object,
    },
  },
  methods: {},
  components: { CounterProduct },
};
</script>

<style lang="scss" scoped>
.order__item {
  width: 380px;
  height: fit-content;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  display: flex;
  padding: 16px;
  margin: 20px 0;
  &-image {
    img {
      width: 94px;
    }
    margin-right: 16px;
  }
  &-info {
    width: 100%;
    display: flex;
    h3 {
      font-size: 16px;
    }
    flex-direction: column;
    &-title {
      flex: 1 1;
    }
    &-type {
      flex: 1 1;
    }
    &-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1 1;
      margin-top: 5px;
      span {
        color: #ff7010;
        font-weight: 600;
      }
    }
  }
}
</style>
