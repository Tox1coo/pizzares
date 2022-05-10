<template>
  <div class="form">
    <label :for="typeInput">{{ labelInput }}</label>
    <input
      :value="modelValue"
      @input="updateInput($event)"
      :name="typeInput"
      :type="typeInput"
      :placeholder="placeholderInput"
    />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    typeInput: {
      type: String,
      default: "text",
    },
    placeholderInput: {
      type: String,
      required: true,
    },
    labelInput: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  margin-top: 15px;
}
input {
  width: 320px;
  height: 48px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  outline: 1px solid #ccc;
  padding-left: 10px;
  &:focus {
    border: 1px solid #000;
  }

  &:hover {
    transition: all 0.2s linear;
    border: 1px solid #000;
  }
}
label {
  display: flex;
  align-items: flex-start;
  color: #a5a5a5;
  font-size: 15px;
  margin-bottom: 3px;
}
</style>
