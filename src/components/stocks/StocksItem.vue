<template>
  <div class="stocks__item" :class="{ orange: id % 2 != 0, red: id % 2 === 0 }">
    <img
      :class="{ img: id % 2 === 0 }"
      :src="require(`@/assets/stocks/${img}.png`)"
      alt=""
    />
    <p class="text">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
};
</script>

<style scoped lang="scss">
.stocks__item {
  height: 340px;
  border-radius: 6px;
  border: 1px solid #fff;
  position: relative;
  cursor: pointer;
}
.text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  width: 200px;
  line-height: 26px;
}
.img {
  position: relative;
  top: 35%;
  transform: translateY(-35%);
}

.orange {
  background: #ff650e;
}
.red {
  background: #e53030;
}
</style>
