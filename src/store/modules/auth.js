/* eslint-disable no-unused-vars */
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from "@/store/config";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
  },
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      const auth = getAuth();
      console.log(email);
      console.log(password);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          const db = getDatabase();
          console.log(db);

          // const user = userCredential.user;
        })
        .catch((error) => {
          /*           const errorCode = error.code;
          const errorMessage = error.message; */
          console.log(error);
        });
    },
    async authUser({ dispatch, commit }, { email, password, name }) {
      const auth = getAuth();
      console.log(email);
      console.log(password);
      console.log(name);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user.uid);
          const db = getDatabase();
          console.log(db);
          set(ref(db, "3/users/" + userCredential.user.uid), {
            username: name,
            email: email,
            bonus: 100,
          });

          // const user = userCredential.user;
        })
        .catch((error) => {
          /*           const errorCode = error.code;
          const errorMessage = error.message; */
          console.log(error);
        });
    },

    async logoutUser({ dispatch, commit }) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error);
          // An error happened.
        });
    },
  },
  namespaced: true,
};
