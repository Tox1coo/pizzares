/* eslint-disable no-unused-vars */

import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { firebaseConfig } from "@/store/config";
import * as storageGlobal from "firebase/storage";

export const products = {
  store: () => ({
    productList: [],
    filterProduct: [],
    copyProductList: [],
    category: [],
    filterList: "Пицца",
    isLoading: false,
  }),

  getters: {
    getProductListinCategory: (state) =>
      function (field) {
        return state.productList.filter((elem) => elem.category === field);
      },
    getFilterProductList: (state) =>
      function (field) {
        return state.filterProduct.filter((elem) => elem.productName === field);
      },
    getProductsListBeforeFilter(state) {
      return state.filterProduct.filter(
        (elem) => elem.productName === state.filterList
      );
    },
  },

  mutations: {
    setProductList(state, productList) {
      state.productList = productList;
    },
    setCategory(state, category) {
      state.category = category;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setFilterProduct(state, filterProduct) {
      state.filterProduct = filterProduct;
    },
    setFilterList(state, filterList) {
      state.filterList = filterList;
    },
    setCopyProductList(state, copyProductList) {
      state.copyProductList = copyProductList;
    },
  },

  actions: {
    async fetchProducts({ dispatch, state, commit }) {
      const storageData = ref(getDatabase());
      get(child(storageData, `2/filter`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            commit("setFilterProduct", snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      get(child(storageData, `2/productList`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            commit("setProductList", snapshot.val());
            commit("setCopyProductList", snapshot.val());
            dispatch("fetchProductImage", state.productList);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        })

      get(child(storageData, `2/Category`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            commit("setCategory", snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async fetchProductImage({ commit }, product) {
      const storageData = ref(getDatabase());
      const storage = storageGlobal.getStorage();

      product.forEach((categoryItem) => {
        let name = categoryItem.name;
        const starsRef = storageGlobal.ref(storage, `productImage/${name}.png`);
        storageGlobal
          .getDownloadURL(starsRef)
          .then((url) => {
            categoryItem.image = url;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            commit("setProductList", product);
            commit("setCopyProductList", product);
            commit("setIsLoading", true);

          });
      });
    },
  },

  namespaced: true,
};
