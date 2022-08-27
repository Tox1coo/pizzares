<template>
  <div @click="visibleDropList = !visibleDropList" class="drop">
    <span>{{ currentCity }}</span>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 2px; left: 5px"
    >
      <g clip-path="url(#clip0_6707_12617)">
        <path
          d="M12 3.26272C12 3.40658 11.9467 3.55058 11.8402 3.66041L6.38565 9.28535C6.17252 9.50514 5.82738 9.50514 5.61438 9.28535L0.159852 3.66041C-0.0532842 3.44061 -0.0532842 3.08469 0.159852 2.86504C0.372987 2.64539 0.718122 2.64525 0.931122 2.86504L6.00002 8.0923L11.0689 2.86504C11.282 2.64525 11.6272 2.64525 11.8402 2.86504C11.9467 2.97487 12 3.11887 12 3.26272Z"
          fill="#191919"
        />
      </g>
      <defs>
        <clipPath id="clip0_6707_12617">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <transition name="fade">
      <div v-show="visibleDropList" class="visible">
        <ul>
          <li
            v-for="(cityItem, index) in cityList"
            :key="index"
            @click="
              $emit('rotate', cityItem), (visibleDropList = !visibleDropList)
            "
            class="city"
          >
            {{ cityItem }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CityList",
  data() {
    return {
      visibleDropList: false,
    };
  },
  props: {
    currentCity: {
      type: String,
      default: "Москва",
    },
  },
  computed: {
    ...mapState({ cityList: (state) => state.city.cityList }),
  },
  mounted() {
    const that = this;
    document.addEventListener("click", function (event) {
      if (
        event.target.className !== "city" &&
        event.target.parentElement.className !== "drop"
      )
        that.visibleDropList = false;
    });
  },
  methods: {
    /*     rotateCurrentCity(city) {
      this.$emit("currentCity", city);
    }, */
  },
};
</script>

<style scoped lang="scss">
.drop {
  border-radius: 5px;
  border: 1px;
  background: none;
  position: relative;
  width: fit-content;

  cursor: pointer;
  margin: 0px 55px 0 10px;
}
ul {
  list-style: none;
  width: fit-content;
}

li {
  margin: 5px;
  cursor: pointer;
}

.visible {
  background: #fff;
  top: 25px;
  left: -5px;
  height: 150px;
  width: 150px;
  border: 1px solid rgba($color: #c3915b, $alpha: 0.5);
  border-radius: 5px;
  overflow: scroll;
  position: absolute;
  &::-webkit-scrollbar {
    width: 0;
  }
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>
