import { Module } from "vuex";
import { ComponentProps } from "@/types/component";
import { GlobalDataProps } from "@/store";

export interface EditorDataProps {
  components: ComponentProps[];
  currentId: string;
  histories: [];
}
export const editor: Module<EditorDataProps, GlobalDataProps> = {
  state: {
    currentId: "",
    components: [],
    histories: [],
  },
  mutations: {
    addComponent(state, payload) {
      state.components.push(payload);
    },
    setCurrentId(state, payload) {
      state.currentId = payload;
    },
  },
  getters: {
    currentComponent(state) {
      return state.components.find(component => component.id === state.currentId);
    },
  },
};
