import { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [pokemon, setPokemon] = useState();

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => setPokemon(json));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {pokemon
          ? pokemon.results.map((pokemon, index) => (
              <div key={index}>
                <Card name={pokemon.name} url={pokemon.url} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Cards;
