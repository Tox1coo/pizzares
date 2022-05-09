/* eslint-disable no-unused-vars */

import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
export const auth = {
  state: () => ({
    isAuth: false,
    username: "",
    visigleModal: false,
  }),
  mutations: {
    setVisibleModal(state, visibleModal) {
      state.visibleModal = visibleModal;
    },
  },
  actions: {
    async login({ dispatch, commit }, { email, password }) {},
  },
  namespaced: true,
};
