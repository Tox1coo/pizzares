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
      <div class="order__item-info-bottom">
        <CounterProduct
          @incrementPrice="incrementPrice"
          @decrementPrice="decrementPrice"
          :orderItem="orderItem"
        ></CounterProduct>
        <span>{{ priceItem }} ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
import CounterProduct from "../UI/CounterProduct.vue";
export default {
  data() {
    return {
      priceItem: 0,
    };
  },
  mounted() {
    this.priceItem = this.orderItem.price;
  },
  props: {
    orderItem: {
      type: Object,
    },
  },
  methods: {
    incrementPrice(newPrice) {
      this.priceItem += newPrice;
    },
    decrementPrice(newPrice) {
      this.priceItem -= newPrice;
    },
  },
  components: { CounterProduct },
};
</script>

<style lang="scss" scoped>
.order__item {
  width: 380px;
  height: 126px;
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
      span {
        color: #ff7010;
        font-weight: 600;
      }
    }
  }
}
</style>
