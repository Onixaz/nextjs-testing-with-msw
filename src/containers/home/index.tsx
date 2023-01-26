import React, { FC } from "react";
import Image from "next/image";
import { Box, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material";
import { useGetPokemonsQuery } from "@redux/services/pokemon";
import { Pokemon } from "src/types/pokemon";

const HomePageContainer: FC = () => {
  const { data, error, isLoading } = useGetPokemonsQuery();

  const matches = useMediaQuery("(min-width:800px)");

  function extractId(url: string) {
    let id = url.match(/pokemon\/(\d+)\//);
    return id ? id[1] : null;
  }

  return (
    <Box>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ImageList cols={matches ? 8 : 4} rowHeight={150}>
          {data.results.map((pokemon: Pokemon) => {
            const pokemonId = extractId(pokemon.url);
            const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

            return (
              <ImageListItem sx={{ border: "1px solid" }} key={pokemon.name}>
                <Image fill src={imgSrc} alt={pokemon.name} loading="lazy" />
                <ImageListItemBar title={pokemon.name} />
              </ImageListItem>
            );
          })}
        </ImageList>
      ) : null}
    </Box>
  );
};

export default HomePageContainer;
