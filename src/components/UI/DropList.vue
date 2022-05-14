<template>
  <Transition name="slide-up">
    <div v-show="visibleDropList" class="drop">
      <div class="drop__list">
        <p
          @click="updateRestaurant(dropItem)"
          v-for="dropItem in dropList"
          :key="dropItem"
        >
          {{ dropItem }}
        </p>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "DropList",
  props: {
    dropList: {
      type: Array,
    },
    visibleDropList: {
      type: Boolean,
      default: false,
    },
    currentRestaurant: {
      type: String,
    },
  },
  methods: {
    updateRestaurant(dropItem) {
      this.$emit("update:currentRestaurant", dropItem);
      this.$emit("update:visibleDropList", false);
    },
  },
};
</script>

<style scoped lang="scss">
.drop {
  width: 100%;
  height: fit-content;
  background-color: #fff;
  margin-top: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 12px;
  &__list {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    p {
      padding: 5px 0;
      border-bottom: 1px solid rgba(#000, 0.2);
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
