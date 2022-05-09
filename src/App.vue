<template>
  <NavBar :currentCity="currentCity" />

  <div class="container">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/UI/NavBar";

export default {
  components: { NavBar },
  data() {
    return {
      currentCity: "",
    };
  },
};
</script>
<style lang="scss">
.container {
  width: 1320px;
  padding: 0px 15px;
  margin: 0 auto;
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
