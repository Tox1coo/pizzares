<template>
  <form @submit.prevent="submitAuth()" class="auth">
    <h2 class="auth__title">Регистрация</h2>

    <MyInput
      v-model="email"
      :typeInput="'text'"
      :placeholderInput="'Введите ваш e-mail...'"
      :labelInput="'E-mail:*'"
    ></MyInput>
    <span class="error" v-if="v$.email.$error">
      {{ v$.email.$errors[0].$message }}
    </span>

    <MyInput
      v-model="password"
      :typeInput="'password'"
      :placeholderInput="'Введите ваш пароль...'"
      :labelInput="'Пароль:*'"
    ></MyInput>
    <span class="error" v-if="v$.password.$error || errorPasswordLang">
      {{ errorPassword }}
    </span>

    <MyInput
      v-model="userName"
      :typeInput="'text'"
      :placeholderInput="'Введите ваше имя...'"
      :labelInput="'Имя:*'"
    ></MyInput>
    <span class="error" v-if="v$.userName.$error">
      {{ v$.userName.$errors[0].$message }}
    </span>

    <MyButton class="auth__btn auth__btn--autn">Зарегестрироваться</MyButton>

    <div class="user">
      <span>Если у вас уже есть аккаунт: </span>
      <a
        href
        @click.prevent="$emit('update:visibleModalLogin', true)"
        class="auth__btn"
        >Войти</a
      >
    </div>

    <span>
      Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и
      пользовательским соглашением
    </span>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",
      userName: "",
      errorPassword: "",
      errorPasswordLang: false,
    };
  },

  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(8) },
      userName: { required, minLength: minLength(3) },
    };
  },

  props: { show: Boolean, visibleModalLogin: Boolean },
  methods: {
    ...mapMutations({ setIsAuth: "auth/setIsAuth" }),
    ...mapActions({ authUser: "auth/authUser" }),

    submitAuth() {
      this.v$.$validate();
      if (!this.v$.$error) {
        if (
          this.password.search(/[a-zA-Z]/g) != -1 &&
          this.password.search(/[а-яА-Я]/g) != 0
        ) {
          this.$emit("update:show", false);
          this.$emit("update:visibleModalLogin", true);
          this.setIsAuth(true);
          const userAuth = {
            email: this.email,
            password: this.password,
            name: this.userName,
          };
          this.authUser(userAuth);
          console.log(userAuth);
        } else {
          this.errorPassword = "Пароль не должен содержать русских символов";
          this.errorPasswordLang = true;
        }
      } else {
        this.errorPassword = this.v$.password.$errors[0].$message;
        this.errorPasswordLang = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.auth {
  padding: 35px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  text-align: center;
  &__btn {
    min-width: 320px;
    padding: 13px 0;
    margin-top: 16px;
  }
  span {
    color: #191919;
    opacity: 0.4;
    margin-top: 16px;
  }
  &__text {
    font-size: 16px;
    color: #191919;
    line-height: 22px;
    margin-top: 16px;
  }
  &__title {
    font-size: 32px;
    font-weight: 600;
  }
  a {
    color: #ff650e;
    text-decoration: none;
    font-size: 18px;
  }
}
.user {
  margin-top: 5px;
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
</style>
