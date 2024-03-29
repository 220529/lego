<template>
  <div :class="cx('edit-wrapper', { active: currentId === id })" @click="select">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import cx from "classnames";
import { computed, defineComponent } from "vue";
import { useStore } from "@/hooks/store";
export default defineComponent({
  name: "edit-wrapper",
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const store = useStore();
    const currentId = computed(() => store.state.editor.currentId);
    const select = () => {
      store.commit("setCurrentId", props.id);
    };
    return {
      currentId,
      select,
      cx,
    };
  },
});
</script>
<style lang="less" scoped>
.edit-wrapper {
  cursor: pointer;
  &.active {
    border: 1px solid #1890ff;
  }
}
</style>
