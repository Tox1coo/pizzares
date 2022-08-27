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
  transition: background-color 0.15s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #bf4300;
  }
}
</style>
