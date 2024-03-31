<template>
  <div class="about">
    <h1>This is an Home page</h1>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";

export default defineComponent({
  name: "HomeView",
  setup() {
    const store = useStore<GlobalDataProps>();
    const templates = computed(() => store.state.templates);
    console.log("TemplateData", templates.value);

    onMounted(() => {
      store.dispatch("fetchTemplates");
    });
  },
});
</script>
