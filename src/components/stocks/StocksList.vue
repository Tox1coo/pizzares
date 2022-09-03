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
  components: { StocksItem },
  data() {
    return {
      stocksList: [],
    };
  },

  mounted() {
    this.stocksList = stocks;
  },
};
</script>

<style scoped lang="scss">
.stocks {
  display: flex;
  justify-content: space-between;
  gap: 10px 0;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 630px) {
    justify-content: center;
  }
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
}
</style>
