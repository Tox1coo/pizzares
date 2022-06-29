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
import { getAuth, reauthenticateWithCredential, signInWithEmailAndPassword, EmailAuthProvider, updatePassword } from "firebase/auth";
import { firebaseConfig } from "@/store/config";

export const user = {
	state: () => {
		return {
			message: '',
		};
	},
	mutations: {
		updateMessage(state, newMessage) {
			state.message = newMessage;
		}
	},
	actions: {
		updateUserSubscribe({ commit }, userInfo) {
			const db = getDatabase();

			set(
				ref(db, `3/users/${userInfo.UID}/settings/subscribe`),
				userInfo.subscribe
			);
		},

		async checkUserPass({ commit }, oldPassword) {
			const auth = getAuth();
			let check = false;
			const user = auth.currentUser;
			try {
				const credential = EmailAuthProvider.credential(
					user.email,
					oldPassword
				);
				await reauthenticateWithCredential(user, credential).then(() => {
					check = true
				});
			} catch (error) {
				console.log(error.message);
				commit('updateMessage', error.message)
				check = false
			}
			return check
		},

		updateUserPass({ commit }, userPassword) {
			const auth = getAuth();
			const user = auth.currentUser;

			updatePassword(user, userPassword.newPassword).then(() => {
				console.log(2);
			}).catch(error => {
				console.log(error);
			})
		}
	},
	namespaced: true,
};
