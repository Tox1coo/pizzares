export const orders = {
  state: () => ({
    orderList: [],
    sumOrder: 0,
    visibleSideBarOrder: false,
  }),
  getters: {
    getListOrders: (state) => state.orderList,
  },
  mutations: {
    setListOrders(state, orderList) {
      state.orderList.push(orderList);
    },
    plusSumOrder(state, sumOrder) {
      state.sumOrder += sumOrder;
    },
    minusSumOrder(state, sumOrder) {
      state.sumOrder -= sumOrder;
    },
    updateVisibleSideBar(state, visibleSideBarOrder) {
      state.visibleSideBarOrder = visibleSideBarOrder;
    },
  },
  actions: {},
  namespaced: true,
};
