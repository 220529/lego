<template>
  <div class="about">
    <h1>This is an Index page</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexView",
});
</script>
