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

