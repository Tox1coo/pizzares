<template>
  <div class="modal" v-if="show" @click.stop="hideDialog">
    <div class="modal__content" @click.stop>
      <div @click="hideDialog" class="close">
        <span></span>
        <span></span>
      </div>
      <div class="modal__content-left">
        <img class="modal__content-img" :src="product.image" alt="" />
        <div v-if="product.focus != ''" class="focus">{{ product.focus }}</div>
      </div>
      <div class="modal__content-right">
        <h3 class="modal__content-title">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_230_23098)">
                <path
                  d="M20.9487 14.0517C20.6738 10.4723 19.0073 8.22932 17.5371 6.24998C16.1758 4.41754 15 2.83514 15 0.500856C15 0.313356 14.895 0.141981 14.7285 0.0560595C14.5615 -0.030378 14.3608 -0.0162217 14.209 0.094122C12.001 1.67409 10.1587 4.33701 9.51515 6.87782C9.06839 8.64674 9.00928 10.6354 9.00098 11.9488C6.96192 11.5132 6.50001 8.46318 6.49514 8.42995C6.47217 8.27174 6.37551 8.13407 6.23489 8.05888C6.09281 7.98468 5.9258 7.97929 5.78175 8.05059C5.67483 8.10234 3.15722 9.38156 3.01073 14.4891C3.00047 14.659 3 14.8295 3 14.9999C3 19.9619 7.03758 23.9992 12 23.9992C12.0068 23.9997 12.0142 24.0007 12.02 23.9992C12.022 23.9992 12.0239 23.9992 12.0263 23.9992C16.9766 23.985 21 19.9531 21 14.9999C21 14.7503 20.9487 14.0517 20.9487 14.0517ZM12 22.9993C10.3457 22.9993 9 21.5658 9 19.8037C9 19.7437 8.99953 19.6831 9.00389 19.6089C9.0239 18.8658 9.16504 18.3585 9.31983 18.0211C9.60989 18.6441 10.1284 19.2169 10.9707 19.2169C11.2471 19.2169 11.4707 18.9932 11.4707 18.7169C11.4707 18.0051 11.4854 17.1838 11.6626 16.4426C11.8204 15.7854 12.1973 15.0862 12.6749 14.5258C12.8872 15.2533 13.3013 15.8421 13.7056 16.4167C14.2843 17.2389 14.8824 18.089 14.9874 19.5386C14.9937 19.6245 15.0001 19.711 15.0001 19.8037C15 21.5658 13.6543 22.9993 12 22.9993Z"
                  fill="#E23535"
                />
              </g>
              <defs>
                <clipPath id="clip0_230_23098">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          {{ product.title }}
        </h3>
        <div class="modal__content-tabs tabs">
          <TabsList
            @addInfoTab="addTypeToPizza"
            class="tabs__list"
            :tabsList="type"
          ></TabsList>
          <TabsList
            @addInfoTab="addSizeToPizza"
            class="tabs__list"
            :tabsList="size"
          ></TabsList>
        </div>
        <h3>Добавьте в пиццу</h3>

        <div class="modal__content-add">
          <AddList @addToPizza="addToPizza" :addList="add"></AddList>
        </div>
        <div class="modal__content-bottom">
          <div class="modal__content-bottom-left">
            <p>Итого: {{ productItem.price }} ₽</p>
            <span>{{ weight }} г</span>
          </div>
          <MyButton @click="addToOrders()" class="btn">Добавить</MyButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixins";
import AddList from "@/components/AddList";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "ModalProduct",
  components: { AddList },
  data() {
    return {
      type: ["Традиционное", "Тонкое"],
      size: [
        { size: "20 см", price: 0, weight: 400 },
        { size: "28 см", price: 100, weight: 450 },
        { size: "33 см", price: 150, weight: 500 },
      ],
      add: [
        { name: "Моцарелла", price: 59, image: "cheese" },
        { name: "Шампиньоны", price: 65, image: "champignons" },
        { name: "Красный лук", price: 25, image: "onion" },
        { name: "Сладкий перец", price: 80, image: "pepper" },
      ],
      weight: 400,
      productItem: {},
      price: 0,
    };
  },
  mixins: [toggleMixin],
  props: {
    product: Object,
  },
  mounted() {
    this.productItem = JSON.parse(JSON.stringify(this.product));
    this.productItem.type = "Традиционное";
    this.productItem.size = "20 см";
    this.productItem.allIngredients = [];
  },
  methods: {
    ...mapMutations({
      setListOrders: "orders/setListOrders",
      plusSumOrder: "orders/plusSumOrder",
    }),
    ...mapActions({
      checkIsIsOrderPizza: "orders/checkIsIsOrderPizza",
    }),
    addToOrders() {
      this.checkIsIsOrderPizza(this.productItem);
      this.plusSumOrder(this.productItem.price);
      this.hideDialog();
    },
    addToPizza(addItem, active) {
      if (active) {
        this.productItem.allIngredients.push(addItem.name);
      } else {
        const indexItem = this.productItem.allIngredients.findIndex(
          (item) => item === addItem.name
        );
        this.productItem.allIngredients.splice(indexItem, 1);
      }
      this.productItem.price =
        active == true
          ? addItem.price + this.productItem.price
          : this.productItem.price - addItem.price;
    },
    addSizeToPizza(price, size) {
      this.productItem.price -= this.price;
      this.price = price;
      this.productItem.size = size;
      this.productItem.price += this.price;
    },
    addTypeToPizza(type) {
      this.productItem.type = type;
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1000;
  display: flex;
  cursor: pointer;
  &__content {
    position: relative;
    padding-top: 25px;
    padding-right: 20px;
    padding-bottom: 20px;
    margin: auto;
    background: white;
    border-radius: 24px;
    min-height: 50px;
    width: 1070px;
    min-width: 300px;
    cursor: default;
    display: flex;

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-left {
        display: flex;
        align-items: flex-end;
        p {
          color: #ff7010;
          font-size: 20px;
          font-weight: 600;
        }
        span {
          color: #a5a5a5;
          font-size: 14px;
          margin-left: 12px;
        }
      }
    }
    &-title {
      font-size: 22px;
    }

    &-right {
      width: 100%;
      max-width: 480px;
      display: flex;
      flex-direction: column;
    }
    &-left {
      position: relative;
    }
    &-img {
      width: 450px;
      height: 450px;
      margin: 90px 60px 90px;
    }
    &-add {
      display: flex;
      justify-content: space-between;
      flex: 1 1 100%;
    }
    h3 {
      margin-top: 25px;
      margin-bottom: 16px;
    }
  }
}
.focus {
  position: absolute;
  top: 20px;
  padding: 7px 18px;
  background-color: #e23535;
  color: #fff;
  font-size: 18px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
.btn {
  padding: 13px 40px;
}
.close {
  display: flex;
  position: absolute;
  right: -65px;
  top: -40px;
  z-index: 1001;
  width: 32px;
  height: 32px;
  transition: transform 0.4s ease 0s;
  cursor: pointer;
  span {
    right: 15px;
    display: block;
    position: absolute;
    height: 32px;
    width: 2px;
    background-color: #fff;

    &:first-child {
      transform: rotate(-40deg);
    }
    &:last-child {
      transform: rotate(44deg);
    }
  }
  &:hover {
    transform: rotate(270deg);
  }
}
</style>
