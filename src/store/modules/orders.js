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
    deleteOrderItem(state, idOrderItem) {
      state.orderList.splice(idOrderItem, 1);
    },
    updateOrderList(state, orderList) {
      state.orderList = orderList;
    },
  },
  actions: {
    checkIsIsOrder({ state, commit }, productItem) {
      const checkIsInOrder = state.orderList.findIndex(
        (productItemInOrder) => productItemInOrder.id === productItem.id
      );
      const stateOrderListItem = JSON.parse(JSON.stringify(state.orderList));

      if (checkIsInOrder === -1) {
        productItem.countInOrder = 1;
        productItem.allPrice = productItem.price;

        commit("setListOrders", productItem);
      } else {
        stateOrderListItem[checkIsInOrder].countInOrder++;
        stateOrderListItem[checkIsInOrder].allPrice += productItem.price;
        console.log(stateOrderListItem[checkIsInOrder].allPrice);

        commit("updateOrderList", stateOrderListItem);
      }
    },
    incrementProductCount({ state, commit }, productItem) {
      const checkIsInOrder =
        productItem?.type === undefined
          ? state.orderList.findIndex(
              (productItemInOrder) =>
                productItemInOrder.allPrice === productItem.allPrice &&
                productItemInOrder.title === productItem.title
            )
          : state.orderList.findIndex(
              (productItemInOrder) =>
                productItemInOrder.allPrice === productItem.allPrice &&
                productItemInOrder.type === productItem.type
            );

      const stateOrderListItem = JSON.parse(JSON.stringify(state.orderList));
      stateOrderListItem[checkIsInOrder].countInOrder++;
      stateOrderListItem[checkIsInOrder].allPrice += productItem.price;

      commit("updateOrderList", stateOrderListItem);
    },

    decrementProductCount({ state, commit }, productItem) {
      const checkIsInOrder =
        productItem?.type === undefined
          ? state.orderList.findIndex(
              (productItemInOrder) =>
                productItemInOrder.allPrice === productItem.allPrice &&
                productItemInOrder.title === productItem.title
            )
          : state.orderList.findIndex(
              (productItemInOrder) =>
                productItemInOrder.allPrice === productItem.allPrice &&
                productItemInOrder.type === productItem.type
            );

      const stateOrderListItem = JSON.parse(JSON.stringify(state.orderList));
      stateOrderListItem[checkIsInOrder].countInOrder--;

      if (stateOrderListItem[checkIsInOrder].countInOrder == 0) {
        stateOrderListItem[checkIsInOrder].allPrice = productItem.price;
      } else {
        stateOrderListItem[checkIsInOrder].allPrice -= productItem.price;
      }
      commit("updateOrderList", stateOrderListItem);
    },

    async checkIsIsOrderPizza({ state, commit }, productItem) {
      const structuryProduct = productItem?.allIngredients;
      productItem.allPrice = productItem.price;

      const checkIsInOrder = state.orderList.findIndex(
        (productItemInOrder) =>
          productItemInOrder.allPrice === productItem.allPrice &&
          productItemInOrder.type === productItem.type &&
          productItemInOrder.size === productItem.size
      );

      const stateOrderListItem = JSON.parse(JSON.stringify(state.orderList));

      if (checkIsInOrder != -1) {
        const resultStrutury = await state.orderList.filter(
          (productItemInOrder) =>
            productItemInOrder?.allIngredients?.every((productItem) =>
              structuryProduct.includes(productItem)
            )
        );

        if (resultStrutury.length != 0) {
          stateOrderListItem[checkIsInOrder].countInOrder++;
          stateOrderListItem[checkIsInOrder].allPrice += productItem.price;

          commit("updateOrderList", stateOrderListItem);
        } else {
          productItem.countInOrder = 1;
          console.log(2);
          commit("setListOrders", productItem);
        }
      } else {
        productItem.countInOrder = 1;
        commit("setListOrders", productItem);
      }
    },
  },
  namespaced: true,
};
