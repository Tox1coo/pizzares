<template>
  <div class="container">
    <div class="success">
      <div class="success__inner">
        <img :src="require('@/assets/success.png')" alt="success" />
        <h2>Заказ №{{ orderNumber }} принят</h2>
        <p>
          Спасибо за заказ!<br />
          Примерное время доставки 45 минут. Вы можете вернуться на главную
          страницу нажав на кнопку ниже
        </p>
        <MyButton class="success__btn" @click="$router.push('/')"
          >Вернуться на главную страницу</MyButton
        >
      </div>
    </div>
  </div>
  <OrderSideBar> <OrderList /></OrderSideBar>
</template>

<script>
import OrderSideBar from "@/components/orders/OrderSideBar";
import OrderList from "@/components/orders/OrderList";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      orderNumber: (state) => state.auth.orderNumber,
    }),
  },
  components: {
    OrderSideBar,
    OrderList,
  },
};
</script>

<style scoped lang="scss">
.success {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2 {
      margin-bottom: 16px;
    }
    img {
      margin-bottom: 48px;
    }
    p {
      line-height: 22px;
      margin-bottom: 24px;
    }
  }
  &__btn {
    padding: 13px 30px;
  }
}
</style>
