<template>
  <div ref="tab" :class="{ active: indexTab == dataIndex }" class="tabs__item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsItem",
  data() {
    return {
      isActive: false,
      dataIndex: 0,
    };
  },
  props: {
    indexTab: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.dataIndex = this.$refs.tab.getAttribute("data-index");
  },
};
</script>

<style scoped lang="scss">
.tabs__item {
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  border-radius: 6px;
}
.active {
  transition: all 0.2s ease;
  color: #fff;
  background-color: #ff7010;
}
</style>
