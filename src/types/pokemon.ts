export type PokemonDetails = {
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
  };
};

export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  results: Pokemon[];
};
