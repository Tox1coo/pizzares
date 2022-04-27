/* eslint-disable no-unused-vars */

import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { firebaseConfig } from "@/store/config";

export const cityList = {
  state: () => ({
    cityList: [],
  }),
  mutations: {
    setCityList(state, cityList) {
      state.cityList = cityList;
    },
  },
  actions: {
    async fetchCity({ commit }) {
      const storageData = ref(getDatabase());

      get(child(storageData, `0/0/cityName`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            commit("setCityList", snapshot.val());
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
// const app = firebase.initializeApp(firebaseConfig);
