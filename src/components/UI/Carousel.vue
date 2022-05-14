<template>
  <div class="wrapper">
    <div class="wrapper__container">
      <CarouselItem
        v-for="carouselItem in carouselList"
        :key="carouselItem.id"
        :carouselItem="carouselItem"
        :style="{
          left: `${-215 * currentSlide}px`,
        }"
      ></CarouselItem>
    </div>
    <button @click="prevSlide" class="wrapper__btn wrapper__btn--prev">
      &lt;
    </button>
    <button @click="nextSlide" class="wrapper__btn wrapper__btn--next">
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      currentSlide: 0,
    };
  },
  props: {
    carouselList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide--;
        setTimeout(() => {
          this.currentSlide++;
        }, 200);
      }
    },
    nextSlide() {
      const maxSlides = Math.ceil(this.carouselList.length / 2);

      if (this.currentSlide < maxSlides) {
        this.currentSlide++;
      } else {
        this.currentSlide++;
        setTimeout(() => {
          this.currentSlide--;
        }, 200);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 850px;
  position: relative;
  margin-bottom: 30px;
  &__container {
    overflow: hidden;

    display: flex;
    gap: 25px;
  }
  &__btn {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background: none;
    background-color: #ff7010;
    border-radius: 50%;
    border: none;
    transform: translateY(-50%);
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    &--prev {
      left: -8%;
    }
    &--next {
      right: -8%;
    }
  }
}
</style>
