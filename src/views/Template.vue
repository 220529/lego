<template>
  <div class="about">
    <h1>This is an Template page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "TemplateView",
  setup() {
    const router = useRoute();
    console.log("params", router.params);
  },
});
</script>
