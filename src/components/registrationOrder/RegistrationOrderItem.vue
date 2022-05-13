<template>
  <div class="registration__order-item account__order">
    <div class="account__order-image">
      <img :src="orderItem.image" :alt="orderItem.title" />
    </div>
    <div class="account__order-info">
      <h3>{{ orderItem.title }}</h3>
      <p v-if="orderItem?.type" class="order__item-info-type">
        {{ orderItem.type }}, {{ orderItem.size }}
      </p>
      <p v-for="ingredents in orderItem.allIngredients" :key="ingredents">
        + {{ ingredents }}
      </p>
    </div>
    <div class="account__order-counter">
      <CounterProduct :orderItem="orderItem"></CounterProduct>
      <span> {{ orderItem.allPrice }} ₽</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderItem: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.account__order {
  display: flex;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 16px;
  align-items: center;
  background-color: #fff;
  margin-bottom: 16px;
  &-image {
    img {
      width: 120px;
    }
    margin-right: 20px;
  }
  &-info {
    flex: 1 1 100%;
    max-width: 460px;
  }
  &-counter {
    min-width: none;
    display: flex;
    align-items: center;
    span {
      margin-left: 40px;
      font-size: 20px;
      color: #ff7010;
      font-weight: 600;
      flex: 1 0 28%;
    }
  }
}
</style>
