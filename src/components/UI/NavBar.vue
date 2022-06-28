<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__inner-top panel">
          <div class="panel__left">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0201 3.90632C8.5438 3.89562 7.33479 5.11238 7.32362 6.62015C7.3125 8.12785 8.50412 9.36364 9.97993 9.375C9.98678 9.37504 9.99358 9.37508 10.0004 9.37508C11.4668 9.37508 12.6653 8.16195 12.6764 6.66117C12.6875 5.15355 11.4959 3.91769 10.0201 3.90632ZM10.0003 8.59387C9.99553 8.59387 9.99048 8.59383 9.98567 8.59379C8.9315 8.58567 8.08032 7.70293 8.08828 6.62601C8.09619 5.55394 8.95219 4.68745 9.99966 4.68745C10.0045 4.68745 10.0095 4.68749 10.0143 4.68753C11.0685 4.69566 11.9197 5.57839 11.9117 6.65531C11.9038 7.72738 11.0478 8.59387 10.0003 8.59387Z"
                fill="#FF7010"
              />
              <path
                d="M12.346 14.7048C14.8891 11.3605 16.4784 9.6165 16.4998 6.69056C16.5267 3.00919 13.6025 0 9.99941 0C6.43839 0 3.52729 2.94641 3.50022 6.59095C3.47835 9.59623 5.09716 11.3378 7.65781 14.7042C5.11043 15.0932 3.50022 16.0704 3.50022 17.2657C3.50022 18.0663 4.22461 18.7848 5.53999 19.2887C6.73723 19.7474 8.32118 20 10 20C11.6789 20 13.2628 19.7474 14.46 19.2887C15.7754 18.7848 16.4998 18.0663 16.4998 17.2656C16.4998 16.071 14.8911 15.094 12.346 14.7048ZM4.26487 6.59685C4.28873 3.38087 6.85714 0.781252 9.99948 0.781252C13.179 0.781252 15.7589 3.43704 15.7352 6.68474C15.7148 9.46342 14.0294 11.1758 11.3385 14.7595C10.8586 15.3984 10.4178 16.0025 10.0006 16.5934C9.5846 16.0021 9.15262 15.4089 8.66548 14.7593C5.86342 11.0255 4.24415 9.44256 4.26487 6.59685ZM10 19.2188C6.71754 19.2188 4.26487 18.1877 4.26487 17.2657C4.26487 16.5819 5.73109 15.7182 8.19638 15.4191C8.74134 16.1496 9.21911 16.8132 9.68772 17.4911C9.75929 17.5946 9.8756 17.6562 9.99967 17.6563C9.99979 17.6563 9.9999 17.6563 10 17.6563C10.124 17.6563 10.2402 17.5949 10.3119 17.4916C10.7761 16.8226 11.267 16.1425 11.8073 15.4195C14.2702 15.7189 15.7352 16.5824 15.7352 17.2657C15.7351 18.1877 13.2825 19.2188 10 19.2188Z"
                fill="#FF7010"
              />
            </svg>
            <CityList :currentCity="currentCity" @rotate="rotateCityName" />
            <span style="cursor: pointer">Проверить адрес</span>
            <span>Среднее время доставки*: <strong>00:24:19</strong> </span>
          </div>
          <div class="panel__right">
            <span>Время работы: с 11:00 до 23:00 </span>

            <div class="panel__right-auth">
              <ButtonRegister v-if="isAuth == false" @click="check(true)"
                >Войти в аккаунт</ButtonRegister
              >
              <ButtonRegister
                @click="visibleUserParams = !visibleUserParams"
                v-else
                >{{ userInfo?.username }}</ButtonRegister
              >
              <div
                ref="userName"
                v-if="visibleUserParams == true"
                class="panel__right-user user"
              >
                <div class="user__bonus">
                  <p>{{ userInfo.bonus }} бонусов</p>
                  <hr />
                </div>
                <div class="user__params">
                  <a
                    @click="
                      (visibleUserParams = false), $router.push('/settingsUser')
                    "
                    >Мой аккаунт</a
                  >
                  <hr />
                </div>
                <div
                  @click="
                    (visibleUserParams = false), $router.push('/'), setIsAuth(false), logoutUser()
                  "
                  class="user__exit"
                >
                  <div>Выход из аккаунта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="header__inner-bottom panel">
          <div @click="$router.push('/')" class="title">
            <img :src="require(`@/assets/pizza.png`)" class="img" />
            <h2>Куда Пицца</h2>
          </div>
          <div class="panel__btns">
            <MyButton @click="updateVisibleSideBar(true)">
              <svg
                style="margin-right: 5px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6720_12636)">
                  <path
                    d="M7.78125 15.5001H20.4846C20.7991 15.5001 21.0751 15.293 21.1602 14.9922L23.9729 5.1921C24.0333 4.98083 23.9919 4.75388 23.8588 4.57833C23.7255 4.40333 23.5183 4.29998 23.2971 4.29998H6.15802L5.6554 2.04833C5.58398 1.72768 5.29834 1.5 4.96875 1.5H0.703125C0.314575 1.5 0 1.81317 0 2.19999C0 2.587 0.314575 2.89999 0.703125 2.89999H4.40442L6.94354 14.2749C6.19647 14.5983 5.67188 15.3386 5.67188 16.2001C5.67188 17.358 6.61816 18.3 7.78125 18.3H20.4846C20.8733 18.3 21.1877 17.987 21.1877 17.6C21.1877 17.2132 20.8733 16.9 20.4846 16.9H7.78125C7.39398 16.9 7.07813 16.5863 7.07813 16.2001C7.07813 15.8138 7.39398 15.5001 7.78125 15.5001Z"
                    fill="white"
                  />
                  <path
                    d="M7.07812 20.3998C7.07812 21.5579 8.02441 22.4998 9.18768 22.4998C10.3508 22.4998 11.2971 21.5579 11.2971 20.3998C11.2971 19.2419 10.3508 18.2998 9.18768 18.2998C8.02441 18.2998 7.07812 19.2419 7.07812 20.3998Z"
                    fill="white"
                  />
                  <path
                    d="M16.9689 20.3998C16.9689 21.5579 17.9152 22.4998 19.0782 22.4998C20.2415 22.4998 21.1876 21.5579 21.1876 20.3998C21.1876 19.2419 20.2415 18.2998 19.0782 18.2998C17.9152 18.2998 16.9689 19.2419 16.9689 20.3998Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6720_12636">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {{ sumOrder }} ₽
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CityList from "@/components/UI/CityList";
import ButtonRegister from "@/components/UI/ButtonRegister";
import MyButton from "@/components/UI/MyButton";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      currentCity: "Москва",
      visibleModalIsAuth: false,
      visibleUserParams: false,
    };
  },
  components: { CityList, ButtonRegister, MyButton },

  methods: {
    ...mapMutations({
      setVisibleModal: "auth/setVisibleModal",
      setIsAuth: "auth/setIsAuth",
      updateVisibleSideBar: "orders/updateVisibleSideBar",
    }),

    ...mapActions({ logoutUser: "auth/logoutUser" }),

    rotateCityName(cityItem) {
      this.currentCity = cityItem;
    },
    check(check) {
      this.setVisibleModal(check);
    },
  },

  computed: {
    ...mapState({
      sumOrder: (state) => state.orders.sumOrder,
      isAuth: (state) => state.auth.isAuth,
      userInfo: (state) => state.auth.userInfo,
    }),
  },
};
</script>

<style scoped lang="scss">
img {
  width: 32px;
  height: 32px;
}
.header {
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex: 0 1;
  margin-top: 10px;
  background-color: #fff;
  &__inner {
    width: 100%;
    &-bottom {
      margin-top: 25px;
    }
  }
  border-bottom: 1px solid rgba(#ccc, 0.3);
}
.title {
  cursor: pointer;
  display: flex;
  align-items: center;
  h2 {
    margin-left: 10px;
    font-weight: 400;
  }
}
hr {
  position: absolute;
  width: 100%;
  left: 0;
  border-color: rgba(#ccc, 0.3);
}
.panel {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  &__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-child(4) {
      margin-left: 40px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    position: relative;
    span {
      margin-right: 40px;
    }
  }
}

.user {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  width: 285px;
  background: #fff;
  border: 1px solid #f0f0f0;
  top: 40px;
  right: -75px;
  border-radius: 8px;
  position: absolute;
  padding: 16px 20px;
  &__params {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    a {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    hr {
      width: 117%;
      left: -20px;
      bottom: 0;
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
    border: 10px solid transparent;
    border-bottom: 10px solid rgba(#ccc, 0.5);
  }

  &__bonus {
    cursor: default;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    flex: 1 1 auto;
    height: 35px;
    font-weight: 600;
    font-size: 18px;
    border-bottom: 1px solid #f0f0f0;
    color: #ff650e;
    hr {
      width: 117%;
      left: -20px;
      bottom: 0;
    }
  }

  &__exit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 8px;
    flex: 1 1 auto;
    color: #a5a6a5;
  }
}
</style>
