<template>
  <div class="components-list">
    <div
      v-for="(template, index) in defaultTextComponents"
      :key="index"
      class="component-item"
      @click="addComponent(template)"
    >
      <l-text v-bind="template"></l-text>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { uuid } from "@/utils";
import { useStore } from "@/hooks/store";
import { defaultTextComponents } from "@/constants/components";
import { TextComponentProps } from "@/types/component";
import LText from "@/components/LText.vue";
export default defineComponent({
  name: "components-sider",
  components: {
    LText,
  },
  setup() {
    const store = useStore();
    const addComponent = (template: TextComponentProps) => {
      store.commit("addComponent", {
        id: uuid(),
        name: "l-text",
        props: template,
      });
    };
    return {
      addComponent,
      defaultTextComponents,
    };
  },
});
</script>
<style lang="less" scoped>
.component-item {
  cursor: pointer;
}
</style>
