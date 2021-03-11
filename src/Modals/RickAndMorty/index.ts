export interface Episode {
  id: number;
  name: string;
  episode: string;
  characters: Array<string>;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: any;
  location: any;
  image: string;
}
