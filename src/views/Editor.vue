<template>
  <a-layout class="editor">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider class="editor-sidebar">
        <div class="editor-sidebar-main">
          <components-list />
        </div>
      </a-layout-sider>
      <a-layout-content class="editor-content">
        <div class="editor-content-main">
          <edit-wrapper v-for="item in components" :key="item.id" :id="item.id">
            <component :is="item.name" v-bind="item.props" />
          </edit-wrapper>
        </div>
      </a-layout-content>
      <a-layout-sider class="editor-props">
        <div class="editor-settings-main">
          <settings-list />
        </div>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";

import LText from "@/components/LText.vue";
import EditWrapper from "@/components/EditWrapper.vue";
import ComponentsList from "@/components/ComponentsList.vue";
import SettingsList from "@/components/SettingsList.vue";

export default defineComponent({
  name: "EditorView",
  components: {
    LText,
    EditWrapper,
    ComponentsList,
    SettingsList,
  },
  setup() {
    const router = useRoute();
    console.log("params", router.params);
    const store = useStore<GlobalDataProps>();
    const components = computed(() => store.state.editor.components);
    console.log("components", components.value);
    return {
      components,
    };
  },
});
</script>
<style scoped lang="less">
.editor {
  height: 100%;
  &-sidebar,
  &-props {
    widows: 300px;
    background-color: white;
  }
}
</style>
