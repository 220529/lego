<template>
  <a-tabs v-model:activeKey="activeTabIndex">
    <a-tab-pane key="1" tab="属性设置">
      <settings-grounp :curProps="curProps" />
    </a-tab-pane>
    <a-tab-pane key="2" tab="图层设置" force-render>Content of Tab Pane 2</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { ref, defineComponent, PropType } from "vue";
import { AllComponentProps } from "@/types/component";
import SettingsGrounp from "@/components/SettingsGrounp.vue";
export default defineComponent({
  name: "settings-sider",
  components: {
    SettingsGrounp,
  },
  props: {
    curProps: {
      type: {} as PropType<AllComponentProps>,
      require: true,
    },
  },
  setup() {
    const activeTabIndex = ref("1");
    return {
      activeTabIndex,
    };
  },
});
</script>
