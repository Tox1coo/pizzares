/* eslint-disable no-unused-vars */
import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { firebaseConfig } from "@/store/config";
import * as storageGlobal from "firebase/storage";

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
    async fetchCategory({ state, commit }) {
      const storageData = ref(getDatabase());
      let i = 0;
      get(child(storageData, `1/categoryList`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            commit("setCategoryList", snapshot.val());
            i++;
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      let data = [];
    },
    async fetchCategoryImage({ commit }, category) {
      const storageData = ref(getDatabase());
      const storage = storageGlobal.getStorage();

      category.forEach((categoryItem) => {
        console.log(categoryItem.name);
        let name = categoryItem.name;
        const starsRef = storageGlobal.ref(
          storage,
          `categoryImage/${name}.png`
        );
        storageGlobal
          .getDownloadURL(starsRef)
          .then((url) => {
            categoryItem.image = url;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            commit("setCategoryList", category);
          });
      });
    },
  },
  namespaced: true,
};
