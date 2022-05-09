<template>
  <AddItem
    v-for="(add, index) in addList"
    :key="index"
    :addItem="add"
    v-model:active="active"
    @addToPizza="$emit('addToPizza', add, active)"
  ></AddItem>
</template>

<script>
import AddItem from "@/components/AddItem";
export default {
  components: { AddItem },
  props: {
    addList: {
      type: Array,
      required: true,
    },
  },
  emits: ["addToPizza"],
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped lang="scss"></style>
