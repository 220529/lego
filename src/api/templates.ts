import { ResponseListData } from "./response";

export interface PageProps {
  backgroundColor: string;
  backgroundImage: string;
  backgroundRepeat: string;
  backgroundSize: string;
  height: string;
}

export interface TemplateData {
  id?: number;
  props?: PageProps;
  title?: string;
  desc?: string;
  coverImg?: string;
  uuid?: string;
  setting?: { [key: string]: any };
  isTemplate?: boolean;
  isHot?: boolean;
  isNew?: boolean;
  author?: string;
  copiedCount?: number;
  status?: number;
  user?: {
    gender?: string;
    nickName: string;
    picture?: string;
    userName: string;
  };
}

export const fetchTemplatesApi = () => {
  return new Promise<ResponseListData<TemplateData>>(resolve => {
    setTimeout(() => {
      resolve({
        state: 1,
        content: {
          list: [
            {
              id: 28,
              title: "中秋快乐",
              desc: "中秋快乐",
              author: "159****5014",
              coverImg: "http://static.imooc-lego.com/upload-files/screenshot-388804.png",
              copiedCount: 97,
              isHot: false,
              user: {
                userName: "13611915632",
                nickName: "乐高5632",
              },
            },
            {
              id: 27,
              title: "樊登读书-意志力",
              desc: "樊登读书-意志力",
              author: "159****5014",
              coverImg: "http://static.imooc-lego.com/upload-files/screenshot-126349.png",
              copiedCount: 92,
              isHot: false,
              user: {
                userName: "13611915632",
                nickName: "乐高5632",
              },
            },
          ],
        },
      });
    }, 1000);
  });
};
