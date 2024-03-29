import { useStore as useAppStore } from "vuex";
import { GlobalDataProps } from "@/store";

export const useStore = () => {
  return useAppStore<GlobalDataProps>();
};
