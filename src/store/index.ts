import { createStore } from "vuex";

import { user, UserDataProps } from "./user";
import { templates, TemplatesDataProps } from "./templates";

export interface GlobalDataProps {
  user: UserDataProps;
  templates: TemplatesDataProps;
}

export default createStore({
  modules: {
    user,
    templates,
  },
});
