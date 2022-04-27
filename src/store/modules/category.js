/* eslint-disable no-unused-vars */
import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { firebaseConfig } from "@/store/config";

export const categoryList = {
  state: () => ({
    categoryList: [],
  }),
  mutations: {
    setCategoryList(state, categoryList) {
      state.categoryList = categoryList;
    },
  },

  actions: {
    async fetchCategory({ commit }) {
      const storageData = ref(getDatabase());

      get(child(storageData, `0/1/categoryList`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            commit("setCategoryList", snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      let data = [];
    },
  },
  namespaced: true,
};
