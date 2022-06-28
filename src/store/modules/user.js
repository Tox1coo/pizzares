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
import { firebaseConfig } from "@/store/config";

export const user = {
	state: () => {
		return {};
	},
	getters: {},
	mutations: {},
	actions: {
		updateUserInfo({ commit }, userInfo) {
			const db = getDatabase();

			// const updates = {}
			// updates[`3/users/${userInfo.UID}/settings/subscribe`];
			set(
				ref(db, `3/users/${userInfo.UID}/settings/subscribe`),
				userInfo.subscribe
			);

			// return update(ref(db), updates)
		},
	},
	namespaced: true,
};
