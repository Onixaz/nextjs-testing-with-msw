import { rest } from "msw";
import { PokemonResponse } from "src/types/pokemon";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/", (_req, res, ctx) => {
    return res(
      ctx.json<PokemonResponse>({
        count: 2,
        results: [
          {
            name: "bulbasaur",
            url: "",
          },
          {
            name: "ivysaur",
            url: "",
          },
        ],
      })
    );
  }),
];
