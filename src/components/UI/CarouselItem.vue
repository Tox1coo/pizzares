<template>
  <div class="carousel">
    <div class="carousel__image">
      <img :src="carouselItem.image" :alt="carouselItem.title" />
    </div>
    <div class="carousel__info">
      <div class="carousel__info-title">
        <h4>{{ carouselItem.title }}</h4>
      </div>
      <div class="carousel__info-btn">
        <MyButton @click="addToOrder" class="carousel__btn"
          >{{ carouselItem.price }} ₽
        </MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "CarouselItem",
  props: {
    carouselItem: {
      type: Object,
    },
  },
  methods: {
    ...mapMutations({
      plusSumOrder: "orders/plusSumOrder",
    }),
    ...mapActions({
      checkIsIsOrder: "orders/checkIsIsOrder",
    }),
    addToOrder() {
      this.plusSumOrder(this.carouselItem.price);
      this.checkIsIsOrder(this.carouselItem);
    },
  },
};
</script>

<style scoped lang="scss">
.carousel {
  max-width: 195px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  min-height: 320px;
  transition: all 0.2s ease;
  position: relative;
  &__image {
    img {
      width: 190px;
    }
  }
  &__btn {
    min-width: 100%;
    padding: 10px 57px;
  }
  &__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    &-title {
      font-size: 18px;
      flex: 1 1 100%;
    }
    padding: 16px;
  }
}
</style>
