<template>
  <NavBar :currentCity="currentCity" />

  <div class="container">
    <router-view />
  </div>

  <FooterPage></FooterPage>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      currentCity: "",
    };
  },
  created() {
    this.loggedUser();

    this.fetchCategory();
    this.fetchCity();
    this.fetchProducts();
    this.restaurantListAppend();
  },

  methods: {
    ...mapActions({
      loggedUser: "auth/loggedUser",
      fetchCity: "city/fetchCity",
      fetchCategory: "category/fetchCategory",
      fetchProducts: "product/fetchProducts",
      restaurantListAppend: "orders/restaurantListAppend",
    }),
  },
};
</script>
<style lang="scss">
.container {
  width: 1320px;
  padding: 0px 15px;
  margin: 0 auto;
  flex: 1 1 100%;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
hr {
  margin: 0 !important;
}
html {
  background-color: #f9f9f9;
}
</style>
