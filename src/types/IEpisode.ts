import { IPagination } from "./IGenerics";

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IEpisodeFilter {
  name?: string;
  episode?: string;
}

export type IPaginationEpisode = IPagination<IEpisode>;
export type IResponseCharacter = IEpisode | IEpisode[] | IPaginationEpisode;
