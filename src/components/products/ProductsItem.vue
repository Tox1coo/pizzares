<template>
  <div class="product__item">
    <div class="product__item-photo">
      <img :src="`${productItem.image}`" :alt="productItem.title" />
      <div v-if="productItem.focus != ''" class="focus">
        <span>{{ productItem.focus }}</span>
      </div>
    </div>
    <div class="product__item-description price">
      <h3 class="title">{{ productItem.title }}</h3>
      <p class="text">{{ productItem.description }}</p>
      <div class="price__product">
        <MyButton
          v-if="productItem.category != 'Пицца'"
          class="price__btn"
          @click="setSumOrder"
          >Выбрать</MyButton
        >
        <MyButton
          v-else
          @click="$emit('visibleDialog', productItem, true)"
          class="price__btn"
          >Выбрать</MyButton
        >

        <span v-if="productItem.category === 'Пицца'"
          >от {{ productItem.price }} ₽
        </span>
        <span v-else> {{ productItem.price }} ₽ </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import MyButton from "../UI/MyButton.vue";
export default {
  props: {
    productItem: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapMutations({
      plusSumOrder: "orders/plusSumOrder",
      updateVisibleSideBar: "orders/updateVisibleSideBar",
    }),
    ...mapActions({
      checkIsIsOrder: "orders/checkIsIsOrder",
    }),
    setSumOrder() {
      if (this.isAuth) {
        this.plusSumOrder(this.productItem.price);
        this.checkIsIsOrder(this.productItem);
      } else {
        alert("Зайдите в аккаунт");
      }
    },
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
    }),
  },
  components: { MyButton },
};
</script>

<style scoped lang="scss">
.product__item {
  display: flex;
  flex-direction: column;
  max-height: 480px;
  width: 23%;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  border-radius: 12px;
  &-description {
    display: flex;
    flex-direction: column;
    padding: 16px 20px 20px;
    @media (max-width: 910px) {
      padding: 16px 5px 20px;
    }
  }
  &-photo {
    width: 100%;
    position: relative;
    img {
      max-width: 100%;
    }
  }

  @media (max-width: 850px) {
    width: 70%;
    flex-direction: row;
    align-items: center;
    &-photo {
      width: 200px;
    }
    &-description {
      padding: 5px;
      .title {
        margin-bottom: 5px;
      }
      .price__product {
        margin-top: 5px;
      }
    }
    .focus {
      top: 0px;
    }
  }
  @media (max-width: 630px) {
    width: 100%;
    .text {
      font-size: 15px;
    }
    .title {
      font-size: 16px;
      line-height: 1;
    }
    &-photo {
      width: 150px;
    }
  }
  @media (max-width: 450px) {
    &-photo {
      width: 100px;
    }
  }
}
.price {
  flex: 1 1;
  &__product {
    margin-top: 16px;
    flex: 1 1;

    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;

    span {
      color: #ff7010;
      font-size: 18px;
      font-weight: 600;
    }
  }
  &__btn {
    padding: 13px 32px;
    &--background {
      background-color: #fff;
      color: #ff7010;

      border: 1px solid #ff7010;
    }
    @media (max-width: 1100px) {
      padding: 13px 13px;
    }
  }
}
.focus {
  position: absolute;
  top: 20px;
  padding: 7px 18px;
  background-color: #e23535;
  color: #fff;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
.text {
  flex: 1 1;
}
.title {
  flex: 1 1;
  margin-bottom: 12px;
  font-family: "Cambria", "Cochin", Georgia, Times, "Times New Roman", serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.8px;
}
</style>
