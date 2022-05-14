<template>
  <div class="form">
    <label :for="typeInput">{{ labelInput }}</label>
    <input
      :value="modelValue"
      @input="updateInput($event)"
      :class="{ dropList: typeInput === '' }"
      :name="nameInput"
      :type="typeInput"
      :placeholder="placeholderInput"
    />
    <span class="error" v-if="error">{{ errorMessage }}</span>
    <slot></slot>
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
    },
    placeholderInput: {
      type: String,
      required: true,
    },
    labelInput: {
      type: String,
      required: false,
    },
    nameInput: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: { type: String, default: "" },
  },
  methods: {
    updateInput(e) {
      if (this.typeInput === "") {
        const lengthValue = e.target.value.length;
        e.target.value = e.target.value.substr(0, lengthValue - 1);
      }
      if (this.nameInput === "Имя") {
        if (Number.isInteger(+e.target.value)) {
          const lengthValue = e.target.value.length;
          e.target.value = e.target.value.substr(0, lengthValue - 1);
        } else {
          this.$emit("update:modelValue", e.target.value);
        }
      }
      if (this.typeInput === "tel" || this.nameInput != "") {
        if (Number.isInteger(+e.target.value)) {
          this.$emit("update:modelValue", e.target.value);
        } else {
          const lengthValue = e.target.value.length;
          e.target.value = e.target.value.substr(0, lengthValue - 1);
        }
      } else {
        this.$emit("update:modelValue", e.target.value);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  margin-top: 15px;
}
.dropList {
  cursor: pointer;
  outline: none;
  appearance: none;
}
input {
  width: 100%;
  height: 48px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  outline: 1px solid #ccc;
  padding-left: 10px;
  &:focus {
    border: 1px solid #ff7010;
  }

  &:hover {
    transition: all 0.2s linear;
    border: 1px solid #ff7010;
  }
}
label {
  display: flex;
  align-items: flex-start;
  color: #a5a5a5;
  font-size: 15px;
  margin-bottom: 3px;
}
.error {
  display: inline-block;
  color: red;
  margin-top: 5px;
}
</style>
