<template>
  <component :is="tag" :style="commonStyle" @click="handler">{{ text }}</component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useComponentCommon } from "@/hooks/component";
import { mapToComponentProps, defaultTextComponentProps, textStyleNames } from "@/types/component";
export default defineComponent({
  name: "l-text",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    ...mapToComponentProps(defaultTextComponentProps),
  },
  setup(props) {
    const { commonStyle, handler } = useComponentCommon(props, textStyleNames);
    return {
      commonStyle,
      handler,
    };
  },
});
</script>
