interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IPagination<T> {
  info: Info;
  results: T[];
}

export type TypeApiID = string | string[] | null;

export interface IFetchHook<T> {
  loading: boolean;
  result: T | null;
}
