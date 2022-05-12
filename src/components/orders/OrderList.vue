<template>
  <div class="order__list">
    <div class="order__list-title">
      <h2>Ваш заказ</h2>
    </div>
    <div v-if="getListOrders.length != 0" class="order__list-item">
      <OrderItem
        v-for="orderItem in getListOrders"
        :key="orderItem.id"
        :orderItem="orderItem"
      ></OrderItem>
    </div>
    <div v-else class="order__list-item order__list-empty">
      <img :src="require('@/assets/order.svg')" alt="" />
      <h2>Ой, ваша корзина пуста! :(</h2>
    </div>
    <div class="order__list-bottom">
      <span> Итого: {{ sumOrder }} ₽ </span>
      <MyButton
        v-if="getListOrders.length != 0"
        @click="$router.push('/order')"
        class="order__list-btn"
        >Оформить заказ</MyButton
      >
      <MyButton
        v-else
        @click="updateVisibleSideBar(false)"
        class="order__list-btn"
        >Вернуться в меню</MyButton
      >
    </div>
  </div>
</template>

<script>
import OrderItem from "@/components/orders/OrderItem.vue";
import { mapGetters, mapState, mapMutations } from "vuex";
import MyButton from "../UI/MyButton.vue";
export default {
  data() {
    return {};
  },
  components: { OrderItem, MyButton },
  methods: {
    ...mapMutations({ updateVisibleSideBar: "orders/updateVisibleSideBar" }),
  },
  computed: {
    ...mapGetters({
      getListOrders: "orders/getListOrders",
    }),
    ...mapState({
      sumOrder: (state) => state.orders.sumOrder,
      visibleSideBarOrder: (state) => state.orders.visibleSideBarOrder,
    }),
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 32px;
}
.order__list {
  display: flex;
  flex-direction: column;
  height: 100%;
  &-bottom {
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #f0f0f0;
    align-items: center;
    span {
      font-weight: 600;
      color: #ff7010;
    }
  }
  &-btn {
    padding: 13px 24px;
  }
  &-item {
    flex: 1 1 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
  &-empty {
    color: #ff7010;
    font-family: "OpenSans", "Helvetica";
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
}
</style>
