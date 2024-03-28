import { Module } from "vuex";
import { GlobalDataProps } from "./index";

export interface TemplatesDataProps {
  data: string[];
}

export const templates: Module<TemplatesDataProps, GlobalDataProps> = {
  state: {
    data: [],
  },
  mutations: {},
};
