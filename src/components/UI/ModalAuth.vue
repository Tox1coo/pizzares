<template>
  <div class="modal" v-if="show" @click.stop="hideDialog">
    <div class="modal__content" @click.stop>
      <div @click="hideDialog" class="close">
        <span></span>
        <span></span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixins";

export default {
  name: "ModalAuth",
  mixins: [toggleMixin],
};
</script>

<style scoped lang="scss">
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1000;
  display: flex;
  cursor: pointer;
  &__content {
    position: relative;
    padding-top: 25px;
    padding-right: 20px;
    padding-bottom: 20px;
    margin: auto;
    background: white;
    border-radius: 24px;
    min-height: 50px;
    width: 1070px;
    min-width: 300px;
    cursor: default;
    display: flex;
  }
}
.close {
  display: flex;
  position: absolute;
  right: -65px;
  top: -40px;
  z-index: 1001;
  width: 32px;
  height: 32px;
  cursor: pointer;
  span {
    right: 15px;
    display: block;
    position: absolute;
    height: 32px;
    width: 2px;
    background-color: #fff;
    &:first-child {
      transform: rotate(-40deg);
    }
    &:last-child {
      transform: rotate(44deg);
    }
  }
}
</style>
