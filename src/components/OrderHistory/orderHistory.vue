<template>
  <div class="history">
    <orderHistoryItem
      v-for="historyItem in historyOrderList"
      :key="historyItem.orderNumber"
      :historyItem="historyItem"
      :data-order="historyItem.orderNumber"
    ></orderHistoryItem>
  </div>
</template>

<script>
import orderHistoryItem from "@/components/OrderHistory/orderHistoryItem";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    orderHistoryItem,
  },
  mounted() {
    this.historyOrderUser(this.currentUser.uid);
  },
  methods: {
    ...mapActions({
      historyOrderUser: "orders/historyOrderUser",
    }),
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
      historyOrderList: (state) => state.orders.historyOrderList,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
