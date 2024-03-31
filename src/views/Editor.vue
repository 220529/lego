<template>
  <a-layout class="editor">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider class="editor-sidebar" width="300">
        <div class="editor-sidebar-main">
          <components-sider />
        </div>
      </a-layout-sider>
      <a-layout-content class="editor-content">
        <h3>画布</h3>
        <div class="editor-content-main">
          <edit-wrapper v-for="item in components" :key="item.id" :id="item.id">
            <component :is="item.name" v-bind="item.props" />
          </edit-wrapper>
        </div>
      </a-layout-content>
      <a-layout-sider class="editor-props" width="300">
        <div class="editor-settings-main">
          <template v-if="currentComponent">
            <settings-sider :curProps="currentComponent.props" />
          </template>
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
import { ComponentProps } from "@/types/component";

import LText from "@/components/LText.vue";
import EditWrapper from "@/components/EditWrapper.vue";
import ComponentsSider from "@/components/ComponentsSider.vue";
import SettingsSider from "@/components/SettingsSider.vue";

export default defineComponent({
  name: "EditorView",
  components: {
    LText,
    EditWrapper,
    ComponentsSider,
    SettingsSider,
  },
  setup() {
    // const router = useRoute();
    // console.log("params", router.params);
    const store = useStore<GlobalDataProps>();
    const components = computed(() => store.state.editor.components);
    const currentComponent = computed<ComponentProps | null>(() => store.getters.currentComponent);
    return {
      components,
      currentComponent,
    };
  },
});
</script>
<style scoped lang="less">
.editor {
  height: 100%;
  * {
    box-sizing: border-box;
  }
  &-sidebar,
  &-props {
    padding: 10px 20px;
    background-color: white;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-main {
      width: 320px;
      height: 630px;
      border: 0.5px gray solid;
    }
  }
}
</style>
