<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__copyright">
          <div @click="$router.push('/')" class="title">
            <img :src="require(`@/assets/pizza.png`)" class="img" />
            <h2>Куда Пицца</h2>
          </div>
          <span>© Copyright 2021 — Куда Пицца </span>
        </div>
        <div
          v-for="footerInfoItem in footerInfo"
          :key="footerInfoItem.title"
          class="footer__info"
        >
          <h2>{{ footerInfoItem.title }}</h2>
          <ul>
            <li v-for="(listItem, index) in footerInfoItem.list" :key="index">
              <a href>{{ listItem }} </a>
            </li>
          </ul>
        </div>
        <div class="footer__social">
          <h2>Контакты</h2>
          <a class="social" href="tel:79262231011"> +7 (926) 223-10-11 </a>
          <a class="social" href> Москва, ул. Юных Ленинцев, д. 99 </a>
          <div class="footer__sosial-links">
            <a href="https://ru-ru.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
  data() {
    return {
      footerInfo: [
        {
          title: "Куда пицца",
          list: [
            "О компании",
            "Пользовательское соглашение",
            "Условия гарантии",
          ],
        },
        {
          title: "Помощь",
          list: ["Ресторан", "Контакты", "Поддержка", "Отследить заказ"],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.footer {
  flex: 1 1;
  padding: 32px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__info {
    ul {
      list-style: none;
    }
  }
  &__copyright {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__social {
    display: flex;
    flex-direction: column;
    &-links {
      display: flex;
    }
  }
}
.title {
  display: flex;
  align-items: center;
  img {
    margin-right: 15px;
  }
}
</style>
