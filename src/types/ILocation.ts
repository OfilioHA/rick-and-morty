import { IPagination } from "./IGenerics";

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface ILocationFilter {
  name?: string;
  type?: string;
  dimension?: string;
}

export type IPaginationLocation = IPagination<ILocation>;
export type IResponseCharacter = ILocation | ILocation[] | IPaginationLocation;
