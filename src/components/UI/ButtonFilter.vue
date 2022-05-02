<template>
  <button
    @click="changeBtn"
    :class="{ active: isActive && active }"
    class="filter__btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonFilter",
  data() {
    return {
      isActive: false,
    };
  },
  watch: {
    active(newQuestion) {
      if (newQuestion === false) {
        this.isActive = false;
      }
    },
  },

  emits: ["active", "setActive"],
  props: {
    active: Boolean,
  },
  methods: {
    changeBtn() {
      this.$emit("setActive", true);

      this.isActive = !this.isActive;
      this.$emit("active", this.isActive);
    },
  },
};
</script>
Сделать функцию на нажатие, и проверять, если она активна, то добавлять, а если
не активна, то убирать из массива элемент
<style scoped lang="scss">
.filter__btn {
  padding: 11px 16px;
  background: none;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  border-radius: 6px;
}
.active {
  background-color: #ff650e;
  color: #fff;
}
</style>

на последней кнопне, надо будет делать функцию для сортировки, а когда нажимаю
на кнопку, то нужно добавлять в массив
