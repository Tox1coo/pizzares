<template>
  <form
    @submit.prevent="submitOrder"
    @click="setVisibleDropList($event)"
    class="form__order"
  >
    <RegistrationOrderFormBlock>
      <h2>О вас</h2>

      <div class="form__order-info_items">
        <MyInput
          class="form__order-info_items-item"
          v-model="username"
          :typeInput="'text'"
          :placeholderInput="'Ваше имя...'"
          :labelInput="'Имя*'"
          :nameInput="'Имя'"
          :errorMessage="v$.username.$errors[0]?.$message"
          :error="v$.username.$error"
        ></MyInput>

        <MyInput
          class="form__order-info_items-item"
          v-model="phone"
          :placeholderInput="'+7'"
          :typeInput="'tel'"
          :labelInput="'Номер телефона*'"
          :errorMessage="v$.phone.$errors[0]?.$message"
          :error="v$.phone.$error"
        ></MyInput>

        <MyInput
          class="form__order-info_items-item"
          v-model="email"
          :typeInput="'email'"
          :placeholderInput="'mail@gmail.com'"
          :errorMessage="v$.email.$errors[0]?.$message"
          :error="v$.email.$error"
          :labelInput="'Почта'"
        ></MyInput>
      </div>
    </RegistrationOrderFormBlock>
    <RegistrationOrderFormBlock>
      <div class="way">
        <h2>Способ получения</h2>
        <div class="way__list">
          <TabsList
            :style="{ marginTop: 0 }"
            @addInfoTab="addWayOrder"
            :tabsList="typeWay"
          ></TabsList>
        </div>
      </div>

      <div
        v-if="currentTypeWay === 'Доставка'"
        class="form__order-way delivery"
      >
        <MyInput
          v-model="address.street"
          :labelInput="'Улица*:'"
          :typeInput="'text'"
          :placeholderInput="'Пушкина'"
          :errorMessage="v$.address.street.$errors[0]?.$message"
          :error="v$.address.street.$error"
        ></MyInput>

        <div class="form__order-way-inputs">
          <MyInput
            v-model="address.house"
            :labelInput="'Дом:'"
            :typeInput="'text'"
            :placeholderInput="'1а'"
            :errorMessage="v$.address.house.$errors[0]?.$message"
            :error="v$.address.house.$error"
          ></MyInput>
          <MyInput
            v-model="address.porch"
            :labelInput="'Подъезд:'"
            :typeInput="'text'"
            :nameInput="'Подъезд'"
            :placeholderInput="'2'"
            :errorMessage="v$.address.porch.$errors[0]?.$message"
            :error="v$.address.porch.$error"
          ></MyInput>
          <MyInput
            v-model="address.floor"
            :labelInput="'Этаж:'"
            :typeInput="'text'"
            :nameInput="'Этаж'"
            :placeholderInput="'1'"
            :errorMessage="v$.address.floor.$errors[0]?.$message"
            :error="v$.address.floor.$error"
          ></MyInput>
          <MyInput
            v-model="address.flat"
            :labelInput="'Квартира:'"
            :typeInput="'text'"
            :nameInput="'Квартира'"
            :placeholderInput="'92'"
            :errorMessage="v$.address.flat.$errors[0]?.$message"
            :error="v$.address.flat.$error"
          ></MyInput>
          <MyInput
            v-model="address.intercom"
            :labelInput="'Домофон:'"
            :typeInput="'text'"
            :nameInput="'Домофон'"
            :placeholderInput="'000'"
            :errorMessage="v$.address.intercom.$errors[0]?.$message"
            :error="v$.address.intercom.$error"
          ></MyInput>
        </div>
      </div>
      <div ref="res" v-else class="form__order-way delivery">
        <MyInput
          v-model="currentRestaurant"
          :typeInput="''"
          :labelInput="'Ресторан*:'"
          :placeholderInput="'Выберите ресторан'"
          :errorMessage="v$.currentRestaurant.$errors[0]?.$message"
          :error="v$.currentRestaurant.$error"
        ></MyInput>

        <DropList
          v-model:visibleDropList="visibleDropList"
          :dropList="restaurantList"
          v-model:currentRestaurant="currentRestaurant"
        ></DropList>
      </div>
      <div class="form__order-way-radio">
        <h4>Когда выполнить заказ?</h4>
        <RadioList
          v-model:value="timeWay"
          :name="'way'"
          :radioList="radioOrderTime"
        ></RadioList>
        <div
          v-show="timeWay === 'По времени'"
          class="form__order-way-inputs data"
        >
          <MyInput
            class="form__order-way-input"
            :style="{ width: `${160}px` }"
            :placeholderInput="'Дата'"
            :typeInput="'date'"
            v-model="wayTime.currentDate"
          >
          </MyInput>
          <MyInput
            class="form__order-way-input"
            :style="{ width: `${160}px` }"
            :placeholderInput="'Время'"
            :typeInput="'time'"
            v-model="wayTime.currentTime"
          >
          </MyInput>
        </div>
      </div>
    </RegistrationOrderFormBlock>
    <RegistrationOrderFormBlock>
      <div class="form__order-payment">
        <h2>Оплата</h2>

        <RadioList
          v-model:value="typePayment"
          :name="'payment'"
          :radioList="OrderTypePayment"
        ></RadioList>
      </div>
    </RegistrationOrderFormBlock>
    <RegistrationOrderFormBlock>
      <div class="form__order-deal">
        <h2>Сдача</h2>

        <RadioList
          v-model:value="typeDeal"
          :name="'deal'"
          :radioList="OrdertypeDeal"
        ></RadioList>
        <MyInput
          v-show="typeDeal === 'Сдача с'"
          class="form__order-deal-input"
          :style="{ width: `${160}px` }"
          :placeholderInput="'0'"
          :typeInput="'text'"
          v-model="deal"
        >
          <span>₽ </span></MyInput
        >
      </div>
    </RegistrationOrderFormBlock>
    <RegistrationOrderFormBlock>
      <div class="form__order-comment">
        <h2>Комментарий</h2>

        <textarea
          v-model="comment"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Есть уточнения?"
        ></textarea>
      </div>
    </RegistrationOrderFormBlock>
    <div class="form__order-end">
      <div class="form__order-end-total">
        <span>Итого: {{ sumOrder }} ₽ </span>
      </div>
      <MyButton class="form__order-end-btn"> Оформить заказ</MyButton>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import useVuelidate from "@vuelidate/core";
import { email, required, maxLength, requiredIf } from "@vuelidate/validators";

import RegistrationOrderFormBlock from "@/components/OrderForm/RegistrationOrderFormBlock";
export default {
  data() {
    return {
      v$: useVuelidate(),

      email: "",
      phone: "",
      username: "",

      typeWay: ["Доставка", "Самовывоз"],
      radioOrderTime: [
        { title: "Как можно скорее", id: 1 },
        { title: "По времени", id: 2 },
      ],
      OrderTypePayment: [
        { title: "Наличными", id: 3 },
        { title: "Картой", id: 4 },
        { title: "Apple Pay", id: 5 },
      ],
      OrdertypeDeal: [
        { title: "Без сдачи", id: 6 },
        { title: "Сдача с", id: 7 },
      ],

      address: {
        street: "",
        house: "",
        porch: "",
        floor: "",
        flat: "",
        intercom: "",
      },
      comment: "",
      typePayment: "Apple Pay",
      typeDeal: "Сдача с",
      timeWay: "По времени",
      currentTypeWay: "Доставка",
      visibleDropList: false,
      currentRestaurant: "",
      isError: false,
      deal: 0,
      wayTime: {
        currentDate: "",
        currentTime: "",
      },
    };
  },
  validations() {
    return {
      email: { email },
      username: { maxLength: maxLength(15), required },
      phone: { required },
      address: {
        street: {
          maxLength: maxLength(15),
          required: requiredIf(this.currentTypeWay === "Доставка"),
        },
        house: { maxLength: maxLength(5) },
        porch: { maxLength: maxLength(2) },
        floor: { maxLength: maxLength(2) },
        flat: { maxLength: maxLength(3) },
        intercom: { maxLength: maxLength(3) },
      },
      currentRestaurant: {
        required: requiredIf(this.currentTypeWay === "Самовывоз"),
      },
    };
  },

  components: {
    RegistrationOrderFormBlock,
  },
  mounted() {
    this.email = this.currentUser.email;
    this.phone = this.currentUser.phoneNumber || "";
    this.username = this.userInfo?.username || "";
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.auth.userInfo,
      currentUser: (state) => state.auth.currentUser,

      sumOrder: (state) => state.orders.sumOrder,
      restaurantList: (state) => state.orders.restaurantList,
    }),
  },
  methods: {
    addWayOrder(way) {
      this.currentTypeWay = way;
    },
    setVisibleDropList(event) {
      if (
        event.target?.placeholder === "Выберите ресторан" ||
        (event.target.parentElement.className === "drop__list" &&
          !event.target.nodeName === "p")
      ) {
        this.visibleDropList = true;
      } else {
        this.visibleDropList = false;
      }
    },
    submitOrder() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        const newOrder = {
          info: {
            name: "",
            phone: "",
            email: "",
          },
          address: {
            street: "",
            house: "",
            porch: "",
            floor: "",
            flat: "",
            intercom: "",
          },
          restaurant: {
            currentRestaurant: "",
          },
          timeWay: {
            typeWay: "",
            date: null,
            time: null,
          },
          typeDeal: {
            deal: null,
          },
          payment: "",
          comment: "",
        };
        newOrder.info.name = this.username;
        newOrder.info.phone = this.phone;
        newOrder.info.email = this.email;
        if (this.currentTypeWay === "Доставка") {
          newOrder.address.street = this.address.street;
          newOrder.address.house = this.address.house;
          newOrder.address.porch = this.address.porch;
          newOrder.address.floor = this.address.floor;
          newOrder.address.flat = this.address.flat;
          newOrder.address.intercom = this.address.intercom;
        } else {
          newOrder.restaurant.currentRestaurant = this.currentRestaurant;
        }
        newOrder.timeWay.typeWay = this.currentTypeWay;

        if (this.timeWay === "По времени") {
          newOrder.timeWay.date = this.wayTime.currentDate;
          newOrder.timeWay.time = this.wayTime.currentTime;
        } else {
          newOrder.timeWay.time = this.timeWay;
        }
        if (this.typeDeal === "Без сдачи") {
          newOrder.typeDeal.deal = null;
        } else {
          newOrder.typeDeal.deal = +this.deal;
        }
        newOrder.payment = this.typePayment;
        newOrder.comment = this.comment;
        console.log(newOrder);
      }
      return;
    },
  },
};
</script>

<style scoped lang="scss">
.form__order {
  h2 {
    margin-bottom: 12px;
  }
  &-info_items {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    gap: 20px;
    &-item {
      width: 270px;
      height: 75px;
      margin-top: 8px;
    }
  }
  &-deal {
    position: relative;
    &-input {
      position: absolute;
      bottom: 0;
      left: 25%;
      span {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        color: #a5a5a5;
      }
    }
  }
  &-comment {
    margin-bottom: 20px;
    textarea {
      resize: none;
      border: 1px solid #ccc;
      border-radius: 6px;
      width: 850px;
      height: 200px;
      padding-top: 13px;
      padding-left: 16px;
      &:focus {
        border: 1px solid #ff7010;
      }

      &:hover {
        transition: all 0.1s linear;
        border: 1px solid #ff7010;
      }
    }
  }
  &-way {
    &-inputs {
      display: flex;
      gap: 20px;
    }
    &-radio {
      h4 {
        margin-bottom: 12px;
        margin-top: 16px;
        color: #a5a5a5;
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
      }
      position: relative;
    }
  }
  &-end {
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    height: 80px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-between;
    &-btn {
      padding: 13px 24px;
    }
    &-total {
      span {
        font-weight: 600;
        color: #ff7010;
        font-size: 20px;
      }
    }
  }
}
.data {
  position: absolute;
  bottom: 0;
  left: 35%;
}
.way {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  h2 {
    flex: 1 1;
  }
  &__list {
    flex: 1 1;
  }
}
</style>
