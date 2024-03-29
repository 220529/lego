import { Module } from "vuex";
import { TemplateData, fetchTemplatesApi } from "@/api/templates";
import { ResponseListData } from "@/api/response";
import { GlobalDataProps } from "@/store";

export interface TemplatesDataProps {
  data: TemplateData[];
}

export const templates: Module<TemplatesDataProps, GlobalDataProps> = {
  state: {
    data: [],
  },
  mutations: {
    fetchTemplates(state, payload: ResponseListData<TemplateData>) {
      const { list } = payload.content;
      state.data = [...state.data, ...list];
    },
  },
  actions: {
    async fetchTemplates({ commit }) {
      const res = await fetchTemplatesApi();
      commit("fetchTemplates", res);
    },
  },
};
