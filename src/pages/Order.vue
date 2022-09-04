<template>
  <div class="registration">
    <h1>Ваш заказ</h1>
    <RegistrationOrder></RegistrationOrder>
    <div class="registration__promo">
      <div class="registration__promo-send">
        <MyInput
          :style="{
            marginTop: `${-2}px`,
          }"
          v-model="promo"
          :placeholderInput="'Промокод'"
        ></MyInput>
        <MyButton class="registration__promo-btn"
          ><img :src="require('@/assets/Send.png')" alt=""
        /></MyButton>
      </div>
      <div class="registration__promo-total">
        <span>Итого: {{ sumOrder }} ₽ </span>
      </div>
    </div>
    <h2 class="registration__subtitle">Добавить к заказу?</h2>
    <Carousel :carouselList="getProducts('Закуски')"></Carousel>

    <h2 class="registration__subtitle">Соусы</h2>
    <Carousel :carouselList="getProducts('Соусы')"></Carousel>
    <RegistrationOrderForm :promo="promo"></RegistrationOrderForm>
  </div>
  <OrderSideBar> <OrderList /></OrderSideBar>
</template>

<script>
import RegistrationOrder from "@/components/registrationOrder/RegistrationOrder";
import OrderSideBar from "@/components/orders/OrderSideBar";
import OrderList from "@/components/orders/OrderList";
import RegistrationOrderForm from "@/components/OrderForm/RegistrationOrderForm";
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      category: "",
      promo: "",
    };
  },
  components: {
    RegistrationOrder,
    OrderSideBar,
    OrderList,
    RegistrationOrderForm,
  },
  mounted() {
    this.category = this.getProductListinCategory("Десерты");
  },
  methods: {
    getProducts(category) {
      return this.getProductListinCategory(category);
    },
  },
  computed: {
    ...mapGetters({
      getProductListinCategory: "product/getProductListinCategory",
    }),
    ...mapState({
      sumOrder: (state) => state.orders.sumOrder,
    }),
  },
};
</script>

<style scoped lang="scss">
.registration {
  margin: 40px auto 60px;
  max-width: 850px;
  h1 {
    margin-bottom: 24px;
  }

  &__subtitle {
    margin-bottom: 24px;
    @media (max-width: 880px) {
      display: none;
    }
  }
  &__promo {
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    height: 80px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-between;
    @media (max-width: 500px) {
      padding: 16px 10px;
    }
    .form {
      width: 100%;
    }
    &-send {
      width: 320px;

      align-items: center;
      display: flex;
    }
    &-btn {
      position: relative;
      left: -20px;
      padding: 15.5px;
    }
    &-total {
      span {
        font-weight: 600;
        color: #ff7010;
        font-size: 20px;
        @media (max-width: 500px) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
