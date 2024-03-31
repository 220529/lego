<template>
  <div class="form-item" v-for="(form, index) in formProps" :key="index">
    <span class="form-item-label">{{ form.text }}</span>
    <div class="form-item-component">
      <component :is="form.component" :[form.valueProp]="form.value" v-on="form.events">
        <template v-if="form.subComponent">
          <component
            v-for="(option, key) in form.options"
            :key="key"
            :value="option.value"
            :is="form.subComponent"
          >
            <span>{{ option.label }}</span>
          </component>
        </template>
      </component>
    </div>
  </div>
</template>
<script lang="ts">
import { reduce } from "lodash-es";
import { defineComponent, computed, PropType } from "vue";
import { useStore } from "@/hooks/store";
import { AllComponentProps } from "@/types/component";
import { settings, FormItemProps } from "@/types/settings";
import InputColor from "@/components/InputColor.vue";
export default defineComponent({
  name: "settings-items",
  components: {
    InputColor,
  },
  props: {
    curProps: {
      type: {} as PropType<AllComponentProps>,
      require: true,
    },
  },
  setup(props) {
    const store = useStore();
    const formProps = computed(() => {
      return reduce(
        props.curProps,
        (result, value, key) => {
          const newKey = key as keyof AllComponentProps;
          const setting = settings[newKey];
          if (setting) {
            const {
              valueProp = "value",
              eventName = "change",
              initializeOnLoad,
              convertOnChange,
            } = setting;
            const item: FormItemProps = {
              ...setting,
              value: initializeOnLoad ? initializeOnLoad(value) : value,
              eventName,
              valueProp,
              events: {
                [eventName]: e => {
                  store.commit("updateComponent", {
                    key,
                    value: convertOnChange ? convertOnChange(e) : e,
                  });
                },
              },
            };
            result[newKey] = item;
          }
          return result;
        },
        {} as { [key: string]: FormItemProps }
      );
    });
    return {
      formProps,
    };
  },
});
</script>
<style scoped lang="less">
.form-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  .ant-select {
    width: 150px;
  }
  &:not(:first-child) {
    margin-top: 5px;
  }
  &-lable {
    flex-shrink: 0;
  }
  &-component {
    flex: 1;
    margin-left: 10px;
  }
}
</style>
