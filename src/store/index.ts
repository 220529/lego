import { createStore } from "vuex";

import { user, UserDataProps } from "@/store/user";
import { editor, EditorDataProps } from "@/store/editor";
import { templates, TemplatesDataProps } from "@/store/templates";

export interface GlobalDataProps {
  user: UserDataProps;
  editor: EditorDataProps;
  templates: TemplatesDataProps;
}

export default createStore({
  modules: {
    user,
    editor,
    templates,
  },
});
