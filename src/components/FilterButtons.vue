<template>
  <ButtonFilter
    @setActive="$emit('setActive', true)"
    :active="activeBtn"
    @active="getActive"
  >
    {{ filterItem }}</ButtonFilter
  >
</template>

<script>
export default {
  data() {
    return { active: false };
  },
  emits: ["addFilter", "setActive"],
  props: {
    filterItem: {
      type: String,
    },
    activeBtn: Boolean,
  },
  methods: {
    getActive(active) {
      this.$emit("addFilter", this.filterItem, active);
      this.active = active;
    },
  },
};
</script>

<style scoped lang="scss"></style>
