<template>
  <IsLoading v-if="!isLoading"></IsLoading>

  <div v-else-if="isLoading" class="history">
    <OrderHistoryItem
      v-for="historyItem in items"
      :key="historyItem.orderNumber"
      :historyItem="historyItem"
      :data-order="historyItem.orderNumber"
    ></OrderHistoryItem>
    <Paginate
      v-if="pageCount > 1"
      v-model="page"
      :page-count="pageCount"
      :page-range="3"
      :margin-pages="2"
      :click-handler="changePageHandler"
      :prev-text="'&#9665;'"
      :next-text="'&#9655;'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    ></Paginate>
  </div>
</template>

<script>
import OrderHistoryItem from "@/components/OrderHistory/OrderHistoryItem";
import Paginate from "vuejs-paginate-next";
import paginationMixin from "@/mixins/pagination.mixin";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    OrderHistoryItem,
    Paginate,
  },
  async mounted() {
    await this.loadInfo();
  },
  mixins: [paginationMixin],
  methods: {
    ...mapActions({
      historyOrderUser: "orders/historyOrderUser",
    }),
    loadInfo() {
      setTimeout(() => {
        this.historyOrderUser(this.currentUser.uid);
      }, 1000);
      setTimeout(() => {
        const items = JSON.parse(JSON.stringify(this.historyOrderList));
        const itemsList = [];
        for (const key in items) {
          itemsList.push(items[key]);
        }
        this.setupPagination(itemsList);
        this.isLoading = true;
      }, 1500);
    },
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
      historyOrderList: (state) => state.orders.historyOrderList,
    }),
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  cursor: pointer;
  gap: 16px;
}
.page-link {
  color: #000;

  position: relative;
  display: block;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee2e6;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0.375rem 0.75rem;
  a {
    color: #fff;
    text-decoration: underline;
  }
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}
.page-item:hover .page-link {
  background-color: #ff7010;
  color: #fff;
}
.page-item:first-child .page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  background-color: #ff7010;
  color: #fff;
  margin-top: -1px;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #ff7010;
  border-color: #f0f0f0;
}
.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: #ff7010;
  color: #fff;
  margin-top: -1px;
}
</style>
