/* eslint-disable no-unused-vars */

import {
  getDatabase,
  ref,
  get,
  child,
  update,
  set,
  push,
} from "firebase/database";

export const orders = {
  state: () => ({
    orderList: [],
    sumOrder: 0,
    visibleSideBarOrder: false,
    restaurantList: [],
    historyOrderList: [],
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
    clearSumOrder(state) {
      state.sumOrder = 0;
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
    setrestaurantList(state, restaurantList) {
      state.restaurantList = restaurantList;
    },
    setHistoryOrderList(state, historyOrderList) {
      state.historyOrderList = historyOrderList;
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
          commit("setListOrders", productItem);
        }
      } else {
        productItem.countInOrder = 1;
        commit("setListOrders", productItem);
      }
    },
    async restaurantListAppend({ commit }) {
      const storageData = ref(getDatabase());

      await get(child(storageData, `4/restaurantList`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            commit("setrestaurantList", snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async updateOrderListUser({ state, commit }, newOrder) {
      const random = Math.floor(1 + Math.random() * (4 + 1 - 1));

      newOrder.orderList =
        newOrder?.orderList == undefined ? state.orderList : newOrder.orderList;
      const db = getDatabase();

      switch (random) {
        case 1:
          newOrder.status = "Выполнен";
          break;
        case 2:
          newOrder.status = "Едет к вам";
          break;
        case 3:
          newOrder.status = "Обрабатывается";
          break;
        case 4:
          newOrder.status = "Отмена";
          break;
      }
      const updates = {};
      const newNumber = ++newOrder.orderNumber;
      updates["3/orderNumber"] = newNumber;
      const newOrderKey = push(child(ref(db), "3")).key;
      const UID_USER = newOrder.UID_USER;
      delete newOrder.UID_USER;
      set(ref(db, "3/users/" + UID_USER + "/orders/" + newOrderKey), newOrder);

      return update(ref(db), updates);
    },
    async historyOrderUser({ commit }, UID_USER) {
      const db = getDatabase();
      await get(ref(db, "3/users/" + UID_USER + "/orders/"))
        .then((snapshot) => {
          commit("setHistoryOrderList", snapshot.val());
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  namespaced: true,
};
