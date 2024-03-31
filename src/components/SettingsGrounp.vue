<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel v-for="(group, index) of groups" :key="index" :header="group.text">
      <settings-items :curProps="group.props" />
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts">
import { difference } from "lodash-es";
import { ref, PropType, computed, defineComponent } from "vue";
import { AllComponentProps } from "@/types/component";
import { defaultEditGroupsKeys, defaultEditGroups } from "@/types/settings";
import SettingsItems from "@/components/SettingsItems.vue";
export default defineComponent({
  name: "settings-grounp",
  components: {
    SettingsItems,
  },
  props: {
    curProps: {
      type: Object as PropType<AllComponentProps>,
      require: true,
    },
  },
  setup(props) {
    const keyGroups = computed(() => {
      const normalProps = difference(
        Object.keys(props.curProps as AllComponentProps),
        defaultEditGroupsKeys
      );
      return [
        {
          text: "基本属性",
          items: normalProps,
        },
        ...defaultEditGroups,
      ];
    });
    const groups = computed(() => {
      return keyGroups.value.map(group => {
        const propsMap = {} as AllComponentProps;
        group.items.forEach(item => {
          const key = item as keyof AllComponentProps;
          propsMap[key] = props.curProps?.[key] as string;
        });
        return {
          text: group.text,
          props: propsMap,
        };
      });
    });
    const activeKey = ref(["0"]);
    return { groups, activeKey };
  },
});
</script>
