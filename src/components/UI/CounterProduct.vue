<template>
  <div class="counter">
    <button
      :disabled="counter == 0"
      @click="decrement"
      class="counter__decrement"
    >
      -
    </button>
    <span>{{ orderItem.countInOrder }}</span>
    <button @click="increment" class="counter__increment">+</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "CounterProduct",
  data() {
    return {
      counter: 1,
    };
  },
  props: {
    orderItem: {
      type: Object,
    },
  },
  methods: {
    ...mapMutations({
      setListOrders: "orders/setListOrders",
      plusSumOrder: "orders/plusSumOrder",
      minusSumOrder: "orders/minusSumOrder",
      deleteOrderItem: "orders/deleteOrderItem",
    }),
    ...mapActions({
      incrementProductCount: "orders/incrementProductCount",
      decrementProductCount: "orders/decrementProductCount",
    }),
    increment() {
      this.plusSumOrder(this.orderItem.price);
      this.incrementProductCount(this.orderItem);
    },
    async decrement() {
      this.minusSumOrder(this.orderItem.price);
      await this.decrementProductCount(this.orderItem);

      if (this.orderItem.countInOrder == 0) {
        const deleteOrderItem =
          this.orderItem?.type === undefined
            ? this.orderList.findIndex(
                (productItemInOrder) =>
                  productItemInOrder.allPrice === this.orderItem.allPrice &&
                  productItemInOrder.title === this.orderItem.title
              )
            : this.orderList.findIndex(
                (productItemInOrder) =>
                  productItemInOrder.allPrice === this.orderItem.allPrice &&
                  productItemInOrder.type === this.orderItem.type
              );

        this.deleteOrderItem(deleteOrderItem);
      }
    },
  },

  computed: {
    ...mapState({
      orderList: (state) => state.orders.orderList,
    }),
  },
};
</script>

<style scoped lang="scss">
.counter {
  width: 92px;
  height: 36px;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffeee2;
  button {
    background: none;
    border: none;
    color: #ff7010;
    cursor: pointer;
    font-size: 18px;
    &:hover {
      border: 1px;
      border-color: #ff7010;
    }
  }
  font-size: 16px;
  color: #ff7010;
}
</style>
