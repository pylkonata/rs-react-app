export interface CharResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: CharResponse[];
}

export interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
  origin: string;
}
