import { IPagination } from "./IGenerics";

type IName = {
  name: string;
  url: string;
};

export interface ICharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: IName;
  location: IName;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterFilter {
  name?: string;
  species?: string;
  type?: string;
  status?: "alive" | "dead" | "unknown";
  gender?: "female" | "male" | "genderless" | "unknown";
}

export type IPaginationCharacter = IPagination<ICharacter>
export type IResponseCharacter = ICharacter | ICharacter[] | IPaginationCharacter