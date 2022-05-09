<template>
  <form @submit.prevent="$emit('update:visibleModalAuth', false)" class="login">
    <h2 class="login__title">Вход в аккаунт</h2>
    <p class="login__text">
      Сможете быстро оформлять заказы, использовать бонусы
    </p>
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
    <MyButton class="login__btn">Войти</MyButton>
    <MyButton @click.prevent class="login__btn login__btn--autn"
      >Зарегестрироваться</MyButton
    >
    <span>
      Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и
      пользовательским соглашением
    </span>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  props: {
    visibleModalAuth: Boolean,
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
}
</style>
