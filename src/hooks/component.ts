import { pick } from "lodash-es";
import { AllComponentProps } from "@/types/component";

export const useComponentCommon = <T extends AllComponentProps>(
  props: Readonly<Partial<T>>,
  fieldsNames: string[]
) => {
  const commonStyle = pick(props, fieldsNames);
  const handler = () => {
    if (props.url) {
      window.location.href = props.url;
    }
  };
  return { commonStyle, handler };
};
