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
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword, updateProfile, updateEmail, updatePhoneNumber } from "firebase/auth";
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

		updateUserPass({ commit }, userPassword, currentUser) {
			const auth = getAuth();
			const user = auth.currentUser;

			updatePassword(user, userPassword.newPassword).then(() => {
			}).catch(error => {
				console.log(error);
			})
		},

		async getNewUserInfo({ commit, dispatch }, userInfo) {
			const auth = getAuth();
			const user = auth.currentUser;
			const db = getDatabase();

			if (userInfo.username !== user.displayName) {
				await updateProfile(user, {
					displayName: userInfo.username
				}).then(() => {
					commit('updateMessage', 'Данные обновились')
				}).catch((error) => {
					console.log(error);
				})
			}

			if (userInfo.phone !== userInfo.oldNumberPhone) {
				set(
					ref(db, `3/users/${user.uid}/settings/phone`),
					userInfo.phone
				);
				commit('updateMessage', 'Данные обновились')

			}

			if (userInfo.email !== user.email) {
				await updateEmail(user, userInfo.email).then(() => {
					commit('updateMessage', 'Данные обновились')
				}).catch((error) => {
					console.log(error);
				})
			}

		}
	},
	namespaced: true,
};
