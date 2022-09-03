<template>
  <div class="out" @click.stop="hideSideBar">
    <div class="order" @click.stop v-show="visibleSideBarOrder">
      <div class="head__item">
        <div @click="hideSideBar" class="close">
          <span></span>
          <span></span>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations({
      updateVisibleSideBar: "orders/updateVisibleSideBar",
    }),

    hideSideBar() {
      this.updateVisibleSideBar(false);
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
  background: rgba(0, 0, 0, 0.5);
}
.order {
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 32px 20px 0px;
  position: relative;
  height: 100vh;
  background-color: #fff;
  @media (max-width: 420px) {
    padding: 32px 5px 0px;
  }
  cursor: default;
  @media (max-width: 420px) {
    width: 100%;
  }
}
.close {
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  transition: transform 0.4s ease;
  span {
    display: block;
    position: absolute;
    top: 10px;
    right: -4px;
    width: 32px;
    height: 3px;
    background-color: #a5a5a5;
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
  &:hover {
    transform: rotate(270deg);
  }
}
.head__item {
  position: absolute;
  right: 20px;
  top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
