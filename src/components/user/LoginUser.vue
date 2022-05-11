<template>
  <form @submit.prevent="submitLogin()" class="login">
    <h2 class="login__title">Вход в аккаунт</h2>
    <p class="login__text">
      Сможете быстро оформлять заказы, использовать бонусы
    </p>
    <MyInput
      v-model="email"
      :typeInput="'text'"
      :placeholderInput="'Введите ваш e-mail...'"
      :labelInput="'E-mail:'"
    ></MyInput>
    <span class="error" v-if="v$.email.$error">
      {{ v$.email.$errors[0].$message }}
    </span>

    <MyInput
      v-model="password"
      :typeInput="'password'"
      :placeholderInput="'Введите ваш пароль...'"
      :labelInput="'Пароль:'"
    ></MyInput>
    <span class="error" v-if="v$.password.$error || errorPasswordLang">
      {{ errorPassword }}
    </span>
    <div v-if="visibleError">{{ messageError }}</div>

    <MyButton ref="login" class="login__btn">Войти</MyButton>

    <div class="user">
      <span>Если у вас нет аккаунта: </span>
      <a
        href
        @click.prevent="$emit('update:visibleModalLogin', false)"
        class="auth__btn"
        >Зарегестрироваться</a
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
import { email, required } from "@vuelidate/validators";
import messages from "@/utils/messages";

import { mapMutations, mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      v$: useVuelidate(),

      email: "",
      password: "",
      errorPassword: "",
      errorPasswordLang: false,
      visibleError: false,
      messageError: "",
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required },
    };
  },

  props: {
    show: Boolean,
    visibleModalLogin: Boolean,
  },
  methods: {
    ...mapMutations({
      setIsAuth: "auth/setIsAuth",
      clearErrorMessage: "auth/clearErrorMessage",
    }),
    ...mapActions({
      login: "auth/login",
    }),
    async submitLogin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        if (
          this.password.search(/[a-zA-Z]/g) != -1 &&
          this.password.search(/[а-яА-Я]/g) != 0
        ) {
          const userLogin = { email: this.email, password: this.password };
          await this.login(userLogin);

          if (this.errorMessage === null) {
            this.$emit("update:show", false);
            this.$emit("update:visibleModalLogin", true);
            this.setIsAuth(true);
            this.clearErrorMessage();
          } else {
            for (const key in messages) {
              if (key === this.errorMessage) {
                this.messageError = messages[key];
              }
            }
            this.visibleError = true;
            this.clearErrorMessage();
          }
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
  computed: {
    ...mapState({ errorMessage: (state) => state.auth.errorMessage }),
    ...mapGetters({ getError: "auth/getError" }),
  },
};
</script>

<style lang="scss" scoped>
.login {
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
