<template>
  <div class="history__item">
    <div @click="activeDropList = !activeDropList" class="history__item-top">
      <div
        :class="{
          processed: historyItem.status === 'Обрабатывается',
          coming: historyItem.status === 'Едет к вам',
          success: historyItem.status === 'Выполнен',
          cancel: historyItem.status === 'Отмена',
        }"
        class="vertical"
      ></div>
      <div class="history__item-top-items">
        <div class="history__item-top-item">
          <span>Заказ</span>

          <p :class="{ cancel__text: historyItem.status === 'Отмена' }">
            №{{ historyItem.orderNumber }}
          </p>
        </div>
        <div class="history__item-top-item">
          <span>Cумма заказа</span>
          <p :class="{ cancel__text: historyItem.status === 'Отмена' }">
            {{ historyItem.totalSumOrder }} ₽
          </p>
        </div>
      </div>

      <div class="history__item-top-items">
        <div class="history__item-top-item">
          <span>Статус</span>
          <p>{{ historyItem.status }}</p>
        </div>
        <div class="history__item-top-item">
          <span>Оплачено</span>
          <p :class="{ cancel__text: historyItem.status === 'Отмена' }">
            {{ historyItem.payment }}
          </p>
        </div>
      </div>
      <div :class="{ 'arrow-active': activeDropList }" class="arrow"></div>
    </div>
    <div class="history__item-body">
      <div class="history__item-body-address">
        <p>{{ historyItem.address || historyItem.restaurant }}</p>
      </div>
      <div class="history__item-body-photo">
        <img
          :class="{ cancel__img: historyItem.status === 'Отмена' }"
          v-for="photoProduct in historyItem.orderList"
          :key="photoProduct.id"
          :src="photoProduct.image"
          alt=""
        />
      </div>
    </div>
    <div class="history__item-droplist">
      <DropHistoryOrders
        :dropList="historyItem.orderList"
        :visibleDropList="activeDropList"
        :orderItem="historyItem"
      ></DropHistoryOrders>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { activeDropList: false };
  },
  props: {
    historyItem: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.history__item {
  padding: 20px 16px;
  width: 850px;
  height: fit-content;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba($color: #000000, $alpha: 0.1);
  margin-bottom: 20px;
  @media (max-width: 880px) {
    width: 100%;
  }
  &-top {
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
    position: relative;
    padding-left: 20px;
    &-item {
      font-family: "SF Pro Text";
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;

      span {
        color: #a5a5a5;
        font-size: 14px;
        margin-bottom: 4px;
      }
    }

    &-items {
      flex: 1;
      display: flex;
      justify-content: space-around;
      @media (max-width: 530px) {
        flex-direction: column;
      }
    }
  }

  &-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    gap: 15px;
    img {
      border-radius: 50%;
      width: 40px;
      box-shadow: -3px 0px #fff;
      position: relative;
      margin-left: -8px;
      position: relative;
    }
  }
}
.vertical {
  width: 4px;
  height: 80%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 24px;
}
.processed {
  background-color: #e23535;
}
.coming {
  background-color: #f77010;
}
.success {
  background-color: #24d17e;
}
.cancel {
  background-color: #a5a5a5;
  &__text {
    color: #a5a5a5;
  }
  &__img {
    -webkit-filter: grayscale(1); /* Webkit браузеры */
    filter: gray; /* для IE6-9*/
    filter: grayscale(1); /* W3C */
  }
}
.product {
  position: relative;
}

.arrow {
  width: 16px;
  height: 16px;
  border-bottom: none;
  border-top: 1px solid #f77010;
  border-right: 1px solid #f77010;
  transform: rotate(-45deg);
  transition: all 0.2s ease 0s;
  position: relative;
  &-active {
    transform: rotate(-225deg);
    top: -5px;
  }
}
</style>
