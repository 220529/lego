export interface ResponseData<T> {
  state: number;
  content: T;
}

export interface ListData<T> {
  list: T[];
}

export type ResponseListData<T> = ResponseData<ListData<T>>;
