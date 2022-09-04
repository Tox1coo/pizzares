<template>
  <div class="container">
    <div class="notfound">
      <div class="notfound__inner">
        <img :src="require('@/assets/order.svg')" alt="empty" />
        <h2>Увы, такой страницы не существует :(</h2>
        <MyButton class="notfound__btn" @click="$router.push('/')"
          >Вернуться на главную страницу</MyButton
        >
      </div>
    </div>
  </div>
  <OrderSideBar> <OrderList /></OrderSideBar>
</template>

<style scoped lang="scss">
.notfound {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2 {
      margin-bottom: 50px;
    }
    img {
      margin-bottom: 20px;
    }
  }
  &__btn {
    padding: 13px 30px;
  }
}
</style>
