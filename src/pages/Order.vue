<template>
  <div class="registration">
    <h1>Ваш заказ</h1>
    <RegistrationOrder></RegistrationOrder>
    <h2 class="registration__subtitle">Добавить к заказу?</h2>
    <Carousel :carouselList="getProducts('Закуски')"></Carousel>

    <h2 class="registration__subtitle">Соусы</h2>
    <Carousel :carouselList="getProducts('Соусы')"></Carousel>
  </div>
  <OrderSideBar> <OrderList /></OrderSideBar>
</template>

<script>
import RegistrationOrder from "@/components/registrationOrder/RegistrationOrder";
import OrderSideBar from "@/components/orders/OrderSideBar";
import OrderList from "@/components/orders/OrderList";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      category: "",
    };
  },
  components: { RegistrationOrder, OrderSideBar, OrderList },
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
  }
}
</style>
