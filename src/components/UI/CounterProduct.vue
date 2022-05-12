<template>
  <div class="counter">
    <button
      :disabled="counter == 0"
      @click="decrement"
      class="counter__decrement"
    >
      -
    </button>
    <span>{{ counter }}</span>
    <button @click="increment" class="counter__increment">+</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
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
    increment() {
      this.counter++;
      this.plusSumOrder(this.orderItem.price);
      this.$emit("incrementPrice", this.orderItem.price);
    },
    decrement() {
      this.counter--;
      this.minusSumOrder(this.orderItem.price);
      this.$emit("decrementPrice", this.orderItem.price);

      if (this.counter == 0) {
        const deleteOrderItem = this.orderList.findIndex(
          (item) => item.id === this.orderItem.id
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
  }
  font-size: 16px;
  color: #ff7010;
}
</style>
