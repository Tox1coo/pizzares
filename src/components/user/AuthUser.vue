<template>
  <form
    @submit.prevent="
      $emit('update:show', false),
        $emit('update:visibleModalLogin', true),
        setIsAuth(true)
    "
    class="auth"
  >
    <h2 class="auth__title">Регистрация</h2>

    <MyInput
      v-model="email"
      :typeInput="'email'"
      :placeholderInput="'Введите ваш e-mail...'"
      :labelInput="'E-mail:'"
    ></MyInput>

    <MyInput
      v-model="password"
      :typeInput="'password'"
      :placeholderInput="'Введите ваш пароль...'"
      :labelInput="'Пароль:'"
    ></MyInput>

    <MyInput
      v-model="userName"
      :typeInput="'text'"
      :placeholderInput="'Введите ваше имя...'"
      :labelInput="'Имя:'"
    ></MyInput>

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
import { mapMutations } from "vuex";

export default {
  data() {
    return { email: "", password: "", userName: "" };
  },

  props: { show: Boolean, visibleModalLogin: Boolean },
  methods: { ...mapMutations({ setIsAuth: "auth/setIsAuth" }) },
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
</style>
