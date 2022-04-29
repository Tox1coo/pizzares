<template>
  <form @submit.prevent class="form" action="">
    <label for="">Проверить адрес доставки</label>
    <InputCity :placeholder="Адрес" v-model="currentCity"></InputCity>
    <MyButton class="btn">Проверить</MyButton>
  </form>
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
  }
}

.btn {
  height: 106%;
  padding: 13px 32px;
}
</style>
