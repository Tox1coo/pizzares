<template>
  <div class="tabs__list">
    <TabsItem
      @click="addActive(index, tab)"
      v-for="(tab, index) in tabsList"
      :key="tab"
      :data-index="index"
      :indexTab="indexTab"
      >{{ tab?.size || tab }}</TabsItem
    >
  </div>
</template>

<script>
export default {
  name: "TabsList",
  props: {
    tabsList: { type: Array, required: true },
  },
  emits: ["addInfoTab"],
  data() {
    return { indexTab: 0 };
  },
  methods: {
    addActive(indexTab, tab) {
      this.indexTab = indexTab;
      if (tab?.price != undefined) {
        this.$emit("addInfoTab", tab.price, tab.size);
      } else {
        this.$emit("addInfoTab", tab);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.tabs {
  &__list {
    display: flex;
    max-width: 480px;
    height: 48px;
    align-items: center;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 25px;
  }
}
</style>
