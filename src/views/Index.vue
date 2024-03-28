<template>
  <a-layout class="index">
    <a-layout-header>Header</a-layout-header>
    <a-layout-content class="index-content">
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexView",
});
</script>
<style lang="less" scoped>
.index {
  height: 100%;
  display: flex;
  flex-direction: column;
  &.content {
    flex: 1;
  }
}
</style>
