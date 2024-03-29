import { Module } from "vuex";
import { GlobalDataProps } from "@/store";

export interface UserProps {
  name?: string;
}

export interface UserDataProps {
  isLogin: boolean;
  data: UserProps;
  token?: string;
}

export const user: Module<UserDataProps, GlobalDataProps> = {
  state: {
    isLogin: false,
    data: {},
    token: "",
  },
  mutations: {
    login(state, payload) {
      console.log("state", payload);
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      state.data = {};
      state.token = "";
    },
  },
};
