<template>
  <div class="add__item">
    <div @click="addActive" :class="{ active: isActive }" class="add__item-img">
      <img :src="require(`@/assets/${addItem.image}.png`)" alt="" />
      <img v-show="isActive" src="@/assets/check.png" alt="" class="check" />
    </div>
    <p class="add__item-name">{{ addItem.name }}</p>
    <span>{{ addItem.price }} ₽ </span>
  </div>
</template>

<script>
export default {
  props: {
    addItem: {
      type: Object,
      required: true,
    },
    active: Boolean,
  },
  emits: ["addToPizza", "update:active"],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    addActive() {
      this.isActive = !this.isActive;
      this.$emit("update:active", this.isActive);
      this.$emit("addToPizza", this.addItem, this.isActive);
    },
  },
};
</script>

<style scoped lang="scss">
.add__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-img {
    position: relative;
    border: 1px solid #f0f0f0;
    padding: 33px;
    border-radius: 12px;
    cursor: pointer;
  }
  span {
    color: #ff7010;
    font-size: 16px;
    font-weight: 600;
  }
  &-name {
    margin-top: 9px;
    margin-bottom: 4px;
  }
}

.active {
  border-color: #ff7010;
}

.check {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
