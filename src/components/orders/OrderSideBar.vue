<template>
  <div class="out" @click.stop="hideSideBar">
    <div class="filter" @click.stop v-show="visibleSideBarOrder">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
// import toggleMixin from "@/mixins/toggleMixins";
export default {
  //   mixins: [toggleMixin],
  methods: {
    ...mapMutations({
      updateVisibleSideBar: "orders/updateVisibleSideBar",
    }),

    hideSideBar() {
      this.updateVisibleSideBar(false);
      // this.$emit("update:show", false);
    },
  },

  computed: {
    ...mapState({
      visibleSideBarOrder: (state) => state.orders.visibleSideBarOrder,
    }),
  },
};
</script>

<style lang="scss" scoped>
.out {
  z-index: 1000;
  min-width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  cursor: pointer;
}
.filter {
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 500px;
  position: relative;
  height: 100vh;
  background-color: #fff;
  &__item {
    padding: 32px 20px 0px;
    &-desc {
      flex: 1 1;
      padding: 0 0px 28px 20px;
    }
    &-btns {
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      border-top: 2px solid #f0f0f0;
    }
  }
  cursor: default;
  &-btn {
    padding: 13px 70.5px;
  }
}
</style>
