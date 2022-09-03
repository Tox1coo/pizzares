<template>
  <div class="form">
    <label for="">Проверить адрес доставки</label>
    <InputCity v-model="currentCity"></InputCity>
    <MyButton class="btn">Проверить</MyButton>
  </div>
</template>

<script>
export default {
  name: "FormCity",
  data() {
    return {
      currentCity: "",
    };
  },
};
</script>

<style scoped lang="scss">
.form {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  label {
    margin-right: 16px;
    font-size: 18px;
    @media (max-width: 800px) {
      display: none;
    }
  }
}

.btn {
  padding: 17px 32px;
  @media (max-width: 470px) {
    display: none;
  }
}
</style>
