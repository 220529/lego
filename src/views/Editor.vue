<template>
  <a-layout class="editor">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider class="editor-sidebar">Sider</a-layout-sider>
      <a-layout-content>Content</a-layout-content>
      <a-layout-sider class="editor-props">Sider</a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "EditorView",
  setup() {
    const router = useRoute();
    console.log("params", router.params);
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
