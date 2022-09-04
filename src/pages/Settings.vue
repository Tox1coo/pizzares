<template>
  <div class="setting">
    <div class="setting__inner">
      <div class="setting__header">
        <h1>Моя аккаунт</h1>
        <TabsList
          class="setting__tabs"
          @addInfoTab="activeSettingButton"
          :tabsList="userList"
        ></TabsList>
      </div>
      <OrderHistory v-if="activeButton === 'История заказов'"></OrderHistory>
      <UserSetting v-else-if="activeButton === 'Настройки'"></UserSetting>
    </div>
  </div>
  <OrderSideBar> <OrderList /></OrderSideBar>
</template>

<script>
import OrderHistory from "@/components/OrderHistory/OrderHistory";
import UserSetting from "@/components/user/UserSetting";

import OrderSideBar from "@/components/orders/OrderSideBar";
import OrderList from "@/components/orders/OrderList";

export default {
  data() {
    return {
      userList: ["История заказов", "Настройки"],
      activeButton: "История заказов",
    };
  },
  components: { OrderSideBar, OrderList, OrderHistory, UserSetting },
  methods: {
    activeSettingButton(activeButton) {
      this.activeButton = activeButton;
    },
  },
};
</script>

<style scoped lang="scss">
.setting {
  &__inner {
    width: 850px;
    min-height: 50vh;
    @media (max-width: 880px) {
      width: 100%;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    gap: 15px;
    @media (max-width: 460px) {
      h1 {
        font-size: 20px;
      }
    }
  }
  &__tabs {
    flex: 1 1;
    margin: auto 0;
  }
  margin: 40px 0 60px;
}
</style>
