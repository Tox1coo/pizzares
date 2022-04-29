/* eslint-disable no-unused-vars */

import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { firebaseConfig } from "@/store/config";
import * as storageGlobal from "firebase/storage";

export const products = {
  store: () => ({
    productList: [],
    isLoading: false,
  }),

  getters: {
    getProductListinCategory: (state) =>
      function (field) {
        return state.productList.filter((elem) => elem.category === field);
      },
  },

  mutations: {
    setProductList(state, productList) {
      state.productList = productList;
    },
  },

  actions: {
    async fetchProducts({ state, commit }) {
      const storageData = ref(getDatabase());
      get(child(storageData, `2/productList`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            commit("setProductList", snapshot.val());
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
        console.log(categoryItem);
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
          });
      });
    },
  },

  namespaced: true,
};
