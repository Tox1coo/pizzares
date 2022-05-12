<template>
  <div class="order">
    <OrderItem
      v-for="orderItem in getListOrders"
      :key="orderItem.id"
      :orderItem="orderItem"
    ></OrderItem>
  </div>
</template>

<script>
import OrderItem from "@/components/orders/OrderItem.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: { OrderItem },
  computed: {
    ...mapGetters({
      getListOrders: "orders/getListOrders",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
