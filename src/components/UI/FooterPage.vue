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
          <div>
            <img :src="require('../../assets/phone.svg')" alt="" />
            <a class="social" href="tel:79262231011"> +7 (926) 223-10-11 </a>
          </div>
          <div>
            <img :src="require('../../assets/Location.svg')" alt="" />
            <a class="social" href> Москва, ул. Юных Ленинцев, д. 99 </a>
          </div>
          <div class="footer__social-links">
            <div>
              <img :src="require('../../assets/facebook.svg')" alt="" />
              <a href="https://ru-ru.facebook.com">Facebook</a>
            </div>
            <div>
              <img :src="require('../../assets/inst.svg')" alt="" />
              <a href="https://www.instagram.com">Instagram</a>
            </div>
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
  flex: 0 1;
  padding: 32px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  a {
    color: #000;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  &__info {
    ul {
      list-style: none;

      li {
        margin-bottom: 20px;

        &:first-child {
          margin-top: 22px;
        }
      }
    }
  }
  &__copyright {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 935px) {
      order: 3;
      margin-top: 15px;
      span {
        margin-top: 10px;
      }
    }
  }
  &__social {
    div {
      display: flex;
      align-items: center;
      img {
        margin-right: 12px;
      }
      margin-top: 20px;
    }
    display: flex;
    flex-direction: column;
    &-links {
      display: flex;
      align-items: center;

      div {
        &:first-child {
          margin-right: 24px;
        }
        margin-top: 0;
      }
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
