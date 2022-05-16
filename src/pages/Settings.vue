<template>
  <div class="setting">
    <div class="container">
      <div class="setting__inner">
        <div class="setting__header">
          <h1>Моя аккаунт</h1>
          <TabsList
            class="setting__tabs"
            @addInfoTab="activeSettingButton"
            :tabsList="userList"
          ></TabsList>
        </div>
        <orderHistory></orderHistory>
      </div>
    </div>
  </div>
</template>

<script>
import orderHistory from "@/components/OrderHistory/orderHistory";
export default {
  data() {
    return {
      userList: ["История заказов", "Настройки"],
      activeButton: "История заказов",
    };
  },
  methods: {
    activeSettingButton(activeButton) {
      this.activeButton = activeButton;
    },
  },
  components: { orderHistory },
};
</script>

<style scoped lang="scss">
.setting {
  &__inner {
    width: 850px;
    margin: 0 auto;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  &__tabs {
    flex: 1 1;
    margin: auto 0;
  }
  margin: 40px 0 60px;
}
</style>
