import { Module } from "vuex";
import { ComponentProps } from "@/types/component";
import { GlobalDataProps } from "@/store";
import { defaultTextComponentProps, UpdateComponentProps } from "@/types/component";

export interface EditorDataProps {
  components: ComponentProps[];
  currentId: string;
  histories: [];
}
export const editor: Module<EditorDataProps, GlobalDataProps> = {
  state: {
    currentId: "",
    components: [
      {
        id: "uuidv4()",
        name: "l-text",
        layerName: "图层1",
        props: {
          ...defaultTextComponentProps,
          text: "hello",
          fontSize: "20px",
          color: "#000000",
          lineHeight: "1",
          textAlign: "left",
          fontFamily: "",
          width: "100px",
          height: "100px",
          backgroundColor: "#efefef",
          // left: "100px",
          // top: "150px",
        },
      },
    ],
    histories: [],
  },
  mutations: {
    addComponent(state, payload) {
      state.components.push(payload);
    },
    updateComponent(state, payload: UpdateComponentProps) {
      const target = state.components.find(component => component.id === state.currentId);
      if (target) {
        // console.log("payload", payload, target);
        const { key, value } = payload;
        target.props[key] = value;
      }
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
