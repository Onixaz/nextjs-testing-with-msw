// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonDetails, PokemonResponse } from "src/types/pokemon";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonDetails, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemons: builder.query<PokemonResponse, void>({
      query: () => `pokemon`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi;
