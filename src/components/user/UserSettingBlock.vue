<template>
  <div class="setting__form">
    <div class="setting__form-header">
      <h2>{{ settingTitle }}</h2>
      <div
        @click="changeSetting = true"
        v-if="settingTitle != 'Подписки' && changeSetting == false"
        class="setting__form-header-right"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.95709 14.4571C1.76005 14.4571 1.5634 14.3821 1.41292 14.2316C1.11236 13.931 1.11236 13.4438 1.41292 13.1433L13.4409 1.11532C13.741 0.814752 14.2286 0.814752 14.5292 1.11532C14.8298 1.41588 14.8298 1.90309 14.5292 2.20366L2.50126 14.2316C2.35117 14.3817 2.15413 14.4571 1.95709 14.4571Z"
            fill="#FF7010"
          />
          <path
            d="M0.770459 19.9999C0.716966 19.9999 0.662702 19.9942 0.608439 19.9826C0.192807 19.8933 -0.0719665 19.4842 0.0173175 19.0686L1.20649 13.5257C1.29577 13.1101 1.70679 12.8461 2.12049 12.9346C2.53613 13.0239 2.8009 13.4329 2.71162 13.8486L1.52245 19.3915C1.44509 19.7529 1.12567 19.9999 0.770459 19.9999Z"
            fill="#FF7010"
          />
          <path
            d="M6.31647 18.811C6.11943 18.811 5.92277 18.7359 5.7723 18.5855C5.47173 18.2849 5.47173 17.7977 5.7723 17.4971L17.8002 5.46956C18.1004 5.169 18.588 5.169 18.8886 5.46956C19.1891 5.77013 19.1891 6.25734 18.8886 6.5579L6.86102 18.5855C6.71055 18.7359 6.51351 18.811 6.31647 18.811Z"
            fill="#FF7010"
          />
          <path
            d="M0.76919 20.0001C0.413978 20.0001 0.094942 19.753 0.0172034 19.3916C-0.0716958 18.976 0.192693 18.5669 0.608325 18.4776L6.15125 17.2884C6.56726 17.2003 6.97635 17.4643 7.06525 17.8796C7.15415 18.2952 6.88976 18.7043 6.47413 18.7936L0.93121 19.9827C0.876947 19.9947 0.822683 20.0001 0.76919 20.0001Z"
            fill="#FF7010"
          />
          <path
            d="M16.1624 8.95993C15.9654 8.95993 15.7683 8.88488 15.6182 8.73441L11.2645 4.38066C10.9639 4.08009 10.9639 3.59288 11.2645 3.29232C11.5647 2.99175 12.0526 2.99175 12.3528 3.29232L16.7066 7.64607C17.0071 7.94663 17.0071 8.43384 16.7066 8.73441C16.5565 8.88488 16.3594 8.95993 16.1624 8.95993Z"
            fill="#FF7010"
          />
          <path
            d="M18.3429 6.78327C18.1458 6.78327 17.9488 6.70823 17.7983 6.55775C17.4977 6.25719 17.4977 5.76998 17.7983 5.46903C18.2266 5.0407 18.4625 4.46074 18.4625 3.83652C18.4625 3.2123 18.2266 2.63234 17.7983 2.20401C17.3696 1.77529 16.7896 1.53938 16.1654 1.53938C15.5412 1.53938 14.9612 1.77529 14.5329 2.20401C14.2327 2.50457 13.7455 2.50496 13.4442 2.20401C13.1436 1.90344 13.1436 1.41623 13.4442 1.11528C14.1631 0.396005 15.1294 0 16.1654 0C17.201 0 18.1678 0.396005 18.8866 1.11528C19.6059 1.83417 20.0019 2.80052 20.0019 3.83652C20.0019 4.87252 19.6059 5.83887 18.8866 6.55775C18.7369 6.70784 18.5399 6.78327 18.3429 6.78327Z"
            fill="#FF7010"
          />
        </svg>
        <span>Изменить</span>
      </div>
      <div
        @click="changeSetting = false"
        v-if="changeSetting"
        class="close setting__form-header-right"
      >
        <span></span>
      </div>
    </div>
    <Transition name="nested">
      <form
        v-if="changeSetting == true || settingTitle == 'Подписки'"
        @submit.prevent
        action=""
      >
        <div v-if="typeForm === 'info'" class="setting__form-items">
          <div class="setting__form-items-input">
            <MyInput
              v-model="username"
              :style="{ width: `${250}px` }"
              :typeInput="'text'"
              :placeholderInput="'Ваше имя...'"
              :labelInput="'Имя*'"
              :nameInput="'Имя'"
              :errorMessage="v$.username?.$errors[0]?.$message"
              :error="v$.username?.$error"
            >
              <span class="error" v-if="error">{{ error }}</span></MyInput
            >

            <MyInput
              v-model="phone"
              :style="{ width: `${250}px` }"
              :placeholderInput="'+7'"
              :errorMessage="v$.phone?.$errors[0]?.$message"
              :error="v$.phone?.$error"
              :typeInput="'tel'"
              :labelInput="'Номер телефона*'"
            >
              <span class="error" v-if="error">{{ error }}</span>
            </MyInput>

            <MyInput
              v-model="email"
              :style="{ width: `${250}px` }"
              :typeInput="'email'"
              :placeholderInput="'mail@gmail.com'"
              :labelInput="'Почта'"
              :errorMessage="v$.email?.$errors[0]?.$message"
              :error="v$.email?.$error"
            >
              <span class="error" v-if="error">{{ error }}</span></MyInput
            >

            <MyInput
              :style="{ width: `${250}px` }"
              :placeholderInput="'Дата'"
              :typeInput="'date'"
              :labelInput="'Дата рождения'"
              v-model="dateOfBirth"
              :errorMessage="v$.dateOfBirth?.$errors[0]?.$message"
              :error="v$.dateOfBirth?.$error"
            >
            </MyInput>
          </div>
          <MyButton @click="updateUserInfo()" class="setting__form-btn"
            >Сохранить изменения</MyButton
          >
        </div>
        <div v-else-if="typeForm === 'password'" class="setting__form-items">
          <div class="setting__form-items-input">
            <MyInput
              v-model="userPassword.oldPassword"
              :style="{ width: `${250}px` }"
              :typeInput="'password'"
              :placeholderInput="'Старый пароль'"
              :labelInput="'Старый пароль*'"
              :errorMessage="v$.userPassword.oldPassword?.$errors[0]?.$message"
              :error="v$.userPassword.oldPassword?.$error"
            >
              <span class="error" v-if="checkPass === false"
                >Неверный пароль</span
              >
            </MyInput>

            <MyInput
              v-model="userPassword.newPassword"
              :style="{ width: `${250}px` }"
              :placeholderInput="'Старый пароль'"
              :typeInput="'password'"
              :labelInput="'Новый пароль*'"
              :errorMessage="v$.userPassword.newPassword?.$errors[0]?.$message"
              :error="v$.userPassword.newPassword?.$error"
            >
              <span class="error" v-if="errorLang">
                {{ error }}
              </span></MyInput
            >

            <MyInput
              v-model="userPassword.confirmNewPassword"
              :style="{ width: `${250}px` }"
              :typeInput="'password'"
              :placeholderInput="'Подтвердите пароль..'"
              :labelInput="'Подтвердите пароль*'"
              :errorMessage="
                v$.userPassword.confirmNewPassword?.$errors[0]?.$message
              "
              :error="v$.userPassword.confirmNewPassword?.$error"
            >
              <span class="error" v-if="errorLang">
                {{ error }}
              </span></MyInput
            >
          </div>

          <MyButton @click="checkUserPassword()" class="setting__form-btn"
            >Сохранить изменения</MyButton
          >
        </div>
        <div v-else class="setting__form-items">
          <input
            type="checkbox"
            id="checkbox"
            v-model="userInfo.settings.subscribe"
          />
          <label
            @click="(check = !check), updateUserSubs()"
            class="label"
            for="checkbox"
          >
            Получать предложения и акции
          </label>
        </div>
      </form>
    </Transition>

    <Transition name="nested-down">
      <div
        v-if="changeSetting == false || settingTitle == 'Подписки'"
        class="setting__form-items"
      >
        <div v-if="typeForm == 'info'" class="setting__form-items-info">
          <div>
            <label for=""> Имя* </label>
            <p>{{ user.displayName }}</p>
          </div>
          <div>
            <label for=""> Номер телефона </label>
            <p>{{ this.phone || "+7" }}</p>
          </div>
          <div>
            <label for=""> Почта* </label>
            <p>{{ this.user.email }}</p>
          </div>
          <div>
            <label for=""> Дата рождения </label>
            <p>{{ this.userInfo?.dateofBirth }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import {
  email,
  required,
  sameAs,
  minLength,
  maxLength,
} from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useVuelidate(),

      email: this.user.email || "",
      phone: "",
      username: this.userInfo?.username || this.user.displayName || "",
      dateOfBirth: this.userInfo?.dateofBirth || "",
      check: false,
      changeSetting: false,
      checkPass: null,
      newUserInfo: {},
      userUpdate: {
        UID: "",
        subscribe: false,
      },
      userPassword: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      error: "",
      errorLang: "",
    };
  },

  validations() {
    return {
      email: { email, required },
      username: { required, minLength: minLength(2), maxLength: maxLength(15) },
      phone: { maxLength: maxLength(11), minLength: minLength(11) },
      userPassword: {
        oldPassword: { required },
        newPassword: { required, minLength: minLength(8) },
        confirmNewPassword: {
          required,
          sameAs: sameAs(this.userPassword.newPassword),
        },
      },
    };
  },
  async mounted() {
    this.phone = await this.userInfo.settings.phone;
  },
  props: {
    settingTitle: {
      type: String,
      default: "",
    },
    typeForm: {
      type: String,
      default: "",
    },
    user: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...mapState({
      userInfo: (state) => state.auth.userInfo,
      message: (state) => state.auth.message,
    }),
  },

  methods: {
    ...mapActions({
      updateUserSubscribe: "user/updateUserSubscribe",
      checkUserPass: "user/checkUserPass",
      updateUserPass: "user/updateUserPass",
      getNewUserInfo: "user/getNewUserInfo",
    }),
    updateUserSubs() {
      this.userUpdate.UID = this.user.uid;
      this.userUpdate.subscribe = this.check;
      this.updateUserSubscribe(this.userUpdate);
    },

    async checkUserPassword() {
      this.checkPass = await this.checkUserPass(this.userPassword.oldPassword);
      if (this.checkPass) {
        this.updateUserPassword();
      }
    },

    updateUserPassword() {
      this.v$.$validate();

      if (this.v$.$error) {
        if (
          (this.userPassword.newPassword.search(/[a-zA-Z]/g) != -1 &&
            this.userPassword.newPassword.search(/[а-яА-Я]/g) != 0) ||
          (this.userPassword.confirmNewPassword.search(/[a-zA-Z]/g) != -1 &&
            this.userPassword.confirmNewPassword.search(/[а-яА-Я]/g) != 0)
        ) {
          this.updateUserPass(this.userPassword);
          this.changeSetting = false;
        } else {
          this.error = "Пароль не должен содержать русских символов";
          this.errorLang = true;
        }
      } else {
        this.errorLang = false;
      }
    },

    updateUserInfo() {
      this.v$.$validate();

      if (
        !this.v$.username?.$error &&
        !this.v$.phone?.$error &&
        !this.v$.email?.$error
      ) {
        if (
          ["7", "8"].indexOf(this.phone[0]) > -1 ||
          this.username.length > 0 ||
          this.email.length > 0
        ) {
          this.newUserInfo.phone = this.phone || "";
          this.newUserInfo.username = this.username;
          this.newUserInfo.email = this.email || "";
          this.newUserInfo.oldNumberPhone = this.userInfo.settings.phone;
          this.getNewUserInfo(this.newUserInfo);
          this.error = "";
          this.changeSetting = false;

          /*
          if(this.phone !== this.user.phoneNumber) {
            this.error = ''
          } else {
            this.error = "Введите новый номер телефона";
          }

          if(this.email !== this.user.email) {
            this.error = ''
          } else {
            this.error = "Введите новый email";

          }
          if(this.username !== this.user.displayName) {
            this.error = ''
          } else {
            this.error = "Введите новое имя пользователя";

          } */
        } else {
          this.error = "Телефон должен начинаться с 7 или 8";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.setting {
  &__form {
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    height: fit-content;
    padding: 24px 32px;
    background-color: #fff;
    margin-bottom: 20px;
    &-header {
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      &-right {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ff7010;

        span {
          margin-left: 12px;
        }
      }
    }
    &-btn {
      padding: 13px 35.5px;
    }
    &-items-input {
      flex-wrap: wrap;
      & div {
        margin-right: 11px;
      }
      & .form {
        margin-top: 0;
        margin-bottom: 16px;
      }
      display: flex;
    }
    &-items-info {
      margin-top: 16px;
      flex-wrap: wrap;
      gap: 20px;
      & div {
        p {
          margin-top: 4px;
        }
        margin-right: 32px;
      }
      display: flex;
    }
  }
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.25s ease;
}
.nested-enter-from,
.nested-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.nested-down-enter-active {
  transition: all 0.5s;
}
.nested-down-leave-active {
  transition: all 0.25s ease;
}

.nested-down-enter-from,
.nested-down-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

/* checkbox */

input[type="checkbox"] {
  appearance: none;
}

input[type="checkbox"]:checked + .label::after {
  opacity: 1;
}

.label {
  padding-left: 20px;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    z-index: 1;
    border: 1px solid #ccc;
    border-radius: 2px;
    background-color: #fff;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: url("../../assets/Vector.svg") center center no-repeat;
    background-size: 12px 12px;
    background-color: #ff7010;
  }
}

.error {
  font-size: 14px;
  display: flex;
  width: 100%;
  align-items: flex-start;
  color: #ff4040 !important;
  opacity: 1 !important;
  margin-top: 5px !important;
}

/* close */

.close {
  width: 20px;
  height: 20px;
  position: relative;
  span {
    position: absolute;

    &::before {
      content: "";
      display: block;
      position: absolute;
      transform: translateX(-50%) rotate(-45deg);
      width: 25px;
      height: 2px;
      top: 0;
      left: 50%;

      background-color: #ff7010;
    }

    &::after {
      content: "";
      display: block;
      transform: translateX(-50%) rotate(45deg);
      position: absolute;
      top: 0;
      left: 50%;
      width: 25px;
      height: 2px;
      background-color: #ff7010;
    }
  }
}
</style>
