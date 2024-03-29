<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="属性设置">
      {{ currentComponent }}
    </a-tab-pane>
    <a-tab-pane key="2" tab="图层设置" force-render>Content of Tab Pane 2</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useStore } from "@/hooks/store";
export default defineComponent({
  name: "settings-list",
  setup() {
    const activeKey = ref("1");
    const store = useStore();
    const currentComponent = computed(() => store.getters.currentComponent);
    // console.log("currentComponent", currentComponent);

    return {
      activeKey,
      currentComponent,
    };
  },
});
</script>
