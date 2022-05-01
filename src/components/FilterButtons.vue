<template>
  <ButtonFilter @active="getActive"> {{ filterItem }}</ButtonFilter>
</template>

<script>
export default {
  data() {
    return { active: false };
  },

  props: {
    filterItem: {
      type: String,
    },
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
