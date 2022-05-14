<template>
  <div class="form">
    <div
      v-for="radioListItem in radioList"
      :key="radioListItem"
      class="form_radio"
    >
      <input
        @click="checkInput($event)"
        :id="`radio-${radioListItem.id}`"
        :name="name"
        checked
        type="radio"
        :value="radioListItem.title"
      />
      <label :for="`radio-${radioListItem.id}`">{{
        radioListItem.title
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioList",
  props: {
    radioList: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },
  methods: {
    checkInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  gap: 25px;
  margin-bottom: 10px;
}
.form_radio {
  margin-bottom: 10px;
}
.form_radio input[type="radio"] {
  display: none;
}
.form_radio label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 0;
  line-height: 18px;
  user-select: none;
}
.form_radio label:before {
  content: "";
  display: inline-block;
  width: 17px;
  height: 18px;
  position: absolute;
  left: 0;
  bottom: 1px;
  background: url(https://snipp.ru/img/radio-1.png) 0 0 no-repeat;
} /* Checked */
.form_radio input[type="radio"]:checked + label:before {
  background: url(https://snipp.ru/img/radio-2.png) 0 0 no-repeat;
} /* Hover */
.form_radio label:hover:before {
  filter: brightness(120%);
} /* Disabled */
.form_radio input[type="radio"]:disabled + label:before {
  filter: grayscale(100%);
}
</style>
