import { AllComponentProps } from "@/types/component";

export interface GroupProps {
  text: string;
  items: string[];
}
export const defaultEditGroups: GroupProps[] = [
  {
    text: "尺寸",
    items: ["height", "width", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom"],
  },
  {
    text: "边框",
    items: ["borderStyle", "borderColor", "borderWidth", "borderRadius"],
  },
  {
    text: "阴影与透明度",
    items: ["opacity", "boxShadow"],
  },
  {
    text: "位置",
    items: ["left", "top"],
  },
  {
    text: "事件功能",
    items: ["actionType", "url"],
  },
];

export const defaultEditGroupsKeys: string[] = defaultEditGroups.reduce((prev, current) => {
  return [...prev, ...current.items];
}, [] as string[]);

export interface FormItemProps {
  text?: string; // 表单描述，如：文本
  value: string; // 表单的值
  valueProp: string; // 表单的key
  component: string; // 表单元素，如：a-input
  subComponent?: string; // 子组件，如：a-radio-button
  options?: {
    value: string;
    label: string;
  }[];
  eventName: string;
  events: {
    [key: string]: (e: any) => void;
  };
}

export interface SettingFormProps {
  text?: string;
  valueProp?: string;
  component: string;
  subComponent?: string; // 子组件
  options?: {
    value: string;
    label: string;
  }[];
  initializeOnLoad?: (v: any) => any;
  convertOnChange?: (v: any) => any;
  eventName?: string;
}

export type SettingFormsProps = {
  [P in keyof AllComponentProps]?: SettingFormProps;
};

// 像素值转换数字
const pxNumberConverter = {
  component: "a-input-number",
  initializeOnLoad: (e: string) => parseFloat(e),
  convertOnChange: (e: number) => (e ? `${e}px` : ""),
};

// 所有属性，对应的编辑组件
export const settings: SettingFormsProps = {
  text: {
    text: "文本",
    component: "a-input",
    convertOnChange: (e: any) => e.target.value,
  },
  fontSize: {
    text: "字号",
    ...pxNumberConverter,
  },
  textAlign: {
    text: "对齐",
    component: "a-radio-group",
    subComponent: "a-radio-button",
    options: [
      { value: "left", label: "左" },
      { value: "center", label: "中" },
      { value: "right", label: "右" },
    ],
    convertOnChange: (e: any) => e.target.value,
  },
  fontFamily: {
    text: "字体",
    component: "a-select",
    subComponent: "a-select-option",
    options: [
      { value: "SimSun", label: "宋体" },
      { value: "SimHei", label: "黑体" },
      { value: "KaiTi", label: "楷体" },
    ],
  },
  fontWeight: {
    text: "加粗",
    component: "a-switch",
    initializeOnLoad: (v: string) => v === "bold",
    convertOnChange: (e: boolean) => (e ? "bold" : "normal"),
    valueProp: "checked",
  },
  textDecoration: {
    text: "划线",
    component: "a-switch",
    initializeOnLoad: (v: string) => v === "underline",
    convertOnChange: (e: boolean) => (e ? "underline" : "none"),
    valueProp: "checked",
  },
  color: {
    text: "字体颜色",
    component: "input-color",
    convertOnChange: (e: any) => e.target.value,
  },
  backgroundColor: {
    text: "背景颜色",
    component: "input-color",
    convertOnChange: (e: any) => e.target.value,
  },
  width: {
    text: "宽度",
    ...pxNumberConverter,
  },
  height: {
    text: "高度",
    ...pxNumberConverter,
  },
  paddingLeft: {
    text: "左边距",
    ...pxNumberConverter,
  },
  paddingRight: {
    text: "右边距",
    ...pxNumberConverter,
  },
  paddingTop: {
    text: "上边距",
    ...pxNumberConverter,
  },
  paddingBottom: {
    text: "下边距",
    ...pxNumberConverter,
  },
  left: {
    text: "X轴坐标",
    ...pxNumberConverter,
  },
  top: {
    text: "Y轴坐标",
    ...pxNumberConverter,
  },
};
