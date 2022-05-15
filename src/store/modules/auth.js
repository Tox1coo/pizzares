/* eslint-disable no-unused-vars */
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import { firebaseConfig } from "@/store/config";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const auth = {
  state: () => ({
    isAuth: false,
    visigleModal: false,
    currentUser: null,
    userInfo: null,
    errorMessage: null,
    orderNumber: 1,
  }),
  mutations: {
    setVisibleModal(state, visibleModal) {
      state.visibleModal = visibleModal;
    },
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage;
    },
    clearErrorMessage(state) {
      state.errorMessage = null;
    },
    setOrderNumber(state, orderNumber) {
      state.orderNumber = orderNumber;
    },
  },
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const db = getDatabase();
          console.log(auth);

          const dbRef = ref(getDatabase());
          get(child(dbRef, `3/users/${userCredential.user.uid}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                console.log(snapshot.val());
                commit("setUserInfo", snapshot.val());
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {});
          console.log(userCredential);
          commit("setCurrentUser", userCredential.user);
          dispatch("updateOrderNumber");
        })
        .catch((error) => {
          commit("setErrorMessage", error.code);
        });
    },

    async authUser({ dispatch, commit }, { email, password, name }) {
      const auth = getAuth();

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const db = getDatabase();
          const dbRef = ref(db);
          set(ref(db, "3/users/" + userCredential.user.uid), {
            username: name,
            bonus: 100,
            settings: {
              phone: "",
            },
          });
          dispatch("updateOrderNumber");

          get(child(dbRef, `3/users/${userCredential.user.uid}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                commit("setUserInfo", snapshot.val());
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.log(error);
            });
          get(child(dbRef, `3/orderNumber`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                commit("setOrderNumber", snapshot.val());
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.log(error);
            });

          commit("setCurrentUser", userCredential.user);
        })
        .catch((error) => {
          commit("setErrorMessage", error.code);
        });
    },

    async logoutUser({ dispatch, commit }) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          commit("setCurrentUser", null);
          commit("setUserInfo", null);
          commit("clearErrorMessage");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async loggedUser({ dispatch, commit }) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const db = getDatabase();
          const dbRef = ref(db);
          dispatch("updateOrderNumber");

          get(child(dbRef, `3/users/${user.uid}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                commit("setUserInfo", snapshot.val());
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {});
          console.log(user);
          commit("setCurrentUser", user);
          commit("setIsAuth", true);
        }
      });
    },
    async updateOrderNumber({ commit }) {
      const db = getDatabase();
      const dbRef = ref(db, "3/orderNumber");
      onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          commit("setOrderNumber", snapshot.val());
        }
      });
    },
    /*     async updateOrderNumber({ commit }) {
      const db = getDatabase();
      const dbRef = ref(db, "3 / orderNumber");
      get(child(dbRef, `3/orderNumber`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            // commit("setOrderNumber", snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, */
  },

  getters: {
    getError: (state) => state.errorMessage,
  },
  namespaced: true,
};
