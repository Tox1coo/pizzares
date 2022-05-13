<template>
  <div v-if="orderList.length != 0" class="registration__order">
    <RegistrationOrderItem
      v-for="orderItem in orderList"
      :key="orderItem.id"
      :orderItem="orderItem"
    ></RegistrationOrderItem>
  </div>
  <div v-else class="registration__order registration__order-empty">
    <img :src="require('@/assets/order.svg')" alt="" />
    <h2>Ой, ваша корзина пуста! :(</h2>
  </div>
</template>

<script>
import RegistrationOrderItem from "@/components/registrationOrder/RegistrationOrderItem";
import { mapState } from "vuex";
export default {
  components: { RegistrationOrderItem },
  computed: {
    ...mapState({
      orderList: (state) => state.orders.orderList,
    }),
  },
};
</script>

<style scoped lang="scss">
.registration__order {
  &-empty {
    color: #ff7010;
    font-family: "OpenSans", "Helvetica";
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>
