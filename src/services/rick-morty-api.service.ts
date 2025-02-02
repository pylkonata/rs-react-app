import { Character } from '../types/characters';
import { CharactersResponse, CharResponse } from '../types/characters';

interface GetCharactersParams {
  page?: number;
  name?: string;
}

class RickMortyApi {
  _apiBase = 'https://rickandmortyapi.com/api';

  getData = async (url: string, params: URLSearchParams) => {
    const res = await fetch(`${url}/?${params}`);

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`Data wasn't found`);
      }
      throw new Error(`Could not fetch data, status: ${res.status}`);
    }

    return await res.json();
  };

  getCharacters = async ({ page = 1, name }: GetCharactersParams) => {
    const params = new URLSearchParams('');

    if (page) {
      params.append('page', page.toString());
    }
    if (name) {
      params.append('name', name);
    }

    const res: CharactersResponse = await this.getData(
      `${this._apiBase}/character`,
      params
    );

    return res.results.map(this._transformCharacter);
  };

  _transformCharacter = (char: CharResponse): Character => {
    return {
      id: char.id,
      name: char.name,
      image: char.image,
      gender: char.gender,
      status: char.status,
      species: char.species,
      origin: char.origin.name,
    };
  };
}
export default RickMortyApi;
