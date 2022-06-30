<template>
  <UserSettingBlock
    v-for="settingItem in settingList"
    :key="settingItem.title"
    :settingTitle="settingItem.title"
    :typeForm="settingItem.type"
    :user="currentUser"
  ></UserSettingBlock>
</template>

<script>
import UserSettingBlock from "@/components/user/UserSettingBlock";
import { mapState } from "vuex";

export default {
  components: {
    UserSettingBlock,
  },
  data() {
    return {
      settingList: [
        {
          title: "Изменение личных данных",
          type: "info",
        },
        { title: "Пароль", type: "password" },

        { title: "Подписки", type: "" },
      ],

    };
  },

  computed: { ...mapState({ currentUser: (state) => state.auth.currentUser }) },
};
</script>

<style scoped lang="scss"></style>
