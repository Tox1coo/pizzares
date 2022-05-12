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

  mounted() {
    this.loggedUser();
  },
  methods: {
    ...mapActions({
      loggedUser: "auth/loggedUser",
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
html {
  background-color: #f9f9f9;
}
</style>
