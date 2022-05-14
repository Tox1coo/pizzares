<template>
  <input type="radio" name="" id="" :value="valueRadio" />
  <label for="">{{ valueRadio }}</label>
</template>

<script>
export default {
  name: "RadioListItem",
  props: {
    valueRadio: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss"></style>
