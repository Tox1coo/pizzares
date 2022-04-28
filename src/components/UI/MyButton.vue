<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped lang="scss">
.btn {
  background: none;
  background-color: #ff650e;
  border-radius: 4px;
  padding: 9px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
</style>
