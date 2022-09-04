<template>
  <div class="form">
    <label for="">Проверить адрес доставки</label>
    <div class="form__input">
      <InputCity v-model="currentCity"></InputCity>
      <MyButton class="btn"
        >Проверить <img :src="require('@/assets/arrowCity.svg')" />
      </MyButton>
    </div>
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
  @media (max-width: 800px) {
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    gap: 10px;
    padding: 16px 10px;
  }
  label {
    margin-right: 16px;
    font-size: 18px;
  }
  &__input {
    flex: 1;
    display: flex;
  }
}

.btn {
  padding: 17px 32px;
  img {
    display: none;
  }
  @media (max-width: 470px) {
    font-size: 0;
    img {
      display: block;
    }
  }
}
</style>
