<template>
  <div class="stocks">
    <StocksItem
      v-for="stocksItem in stocksList"
      :key="stocksItem.id"
      :title="stocksItem.text"
      :img="stocksItem.img"
      :id="stocksItem.id"
    ></StocksItem>
  </div>
</template>

<script>
import stocks from "@/assets/stocks/stocks";

import StocksItem from "@/components/stocks/StocksItem";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { StocksItem },
  data() {
    return {
      stocksList: [],
    };
  },
  /*   props: {
    stocksList: {
      type: Array,
    },
  }, */
  mounted() {
    this.stocksList = stocks;
  },
};
</script>

<style scoped lang="scss">
.stocks {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
