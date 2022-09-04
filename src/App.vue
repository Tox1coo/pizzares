<template>
  <div v-if="isLoading" class="main">
    <NavBar :currentCity="currentCity" />

    <div class="container">
      <router-view />
    </div>

    <FooterPage></FooterPage>
  </div>
  <IsLoading v-else></IsLoading>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      currentCity: "",
    };
  },
  created() {
    this.loggedUser();
  },

  methods: {
    ...mapActions({
      loggedUser: "auth/loggedUser",
    }),
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.product.isLoading,
    }),
  },
};
</script>
<style lang="scss">
.container {
  max-width: 1320px;
  padding: 0px 15px;
  margin: 0 auto;
  flex: 0 1;
  @media (max-width: 360px) {
    padding: 0px 5px;
  }
  @media (max-width: 880px) {
    margin: 0;
  }
}
#app {
  position: relative;
  height: 100vh;
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

.main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
