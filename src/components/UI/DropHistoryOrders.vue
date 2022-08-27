<template>
  <Transition name="slide-up">
    <div v-show="visibleDropList" class="drop">
      <div class="drop__list">
        <div
          v-for="dropItem in dropList"
          :key="dropItem.id"
          class="drop__list-item"
        >
          <div class="drop__list-item-left">
            <img :src="dropItem.image" :alt="dropItem.title" />
            <h4>{{ dropItem.title }}</h4>
          </div>

          <p class="drop__list-item-type" v-if="dropItem?.type">
            {{ dropItem.type }}, {{ dropItem.size }}
          </p>
          <p class="drop__list-item-type" v-else></p>

          <div class="drop__list-count">{{ dropItem.countInOrder }} товар</div>
          <p class="drop__list-allprice">{{ dropItem.allPrice }} ₽</p>
        </div>
      </div>
      <a @click="repeatOrder" class="drop__btn">Повторить заказ</a>
    </div>
  </Transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "DropHistoryOrders",
  data() {
    return {
      orderItemClone: {},
    };
  },
  props: {
    dropList: {
      type: Array,
    },
    visibleDropList: {
      type: Boolean,
      default: false,
    },
    currentRestaurant: {
      type: String,
    },
    orderItem: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions({
      updateOrderListUser: "orders/updateOrderListUser",
    }),
    updateRestaurant(dropItem) {
      this.$emit("update:currentRestaurant", dropItem);
      this.$emit("update:visibleDropList", false);
    },
    repeatOrder() {
      this.orderItemClone = this.orderItem;

      this.orderItemClone.UID_USER = "";
      this.orderItemClone.UID_USER = this.currentUser.uid;
      this.orderItemClone.orderNumber = this.orderNumber;
      this.updateOrderListUser(this.orderItemClone);
      this.$router.push("/successOrder");
    },
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
      orderNumber: (state) => state.auth.orderNumber,
    }),
  },
};
</script>

<style scoped lang="scss">
.drop {
  width: 100%;
  height: fit-content;
  background-color: #fff;
  margin-top: 5px;
  border-radius: 12px;
  &__list {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 12px;
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      &-left {
        display: flex;
        align-items: center;
        min-width: 315px;
      }
      &-type {
        min-width: 150px;
      }
      img {
        border-radius: 50%;
        width: 40px;
        margin-right: 16px;
      }
    }
    &-count {
      padding: 10px 20px;
      color: #ff7010;
      font-weight: 600;
      background-color: #ffeee2;
    }
    &-allprice {
      color: #ff7010;
      font-weight: 600;
    }
  }
  &__btn {
    color: #ff7010;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    text-decoration: none;
    cursor: pointer;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
