import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const ListItem = ({ pokemon, index }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  const getData = () => {
    axios.get(pokemon.url).then((res) => {
      const data = res.data;
      console.log(data);
      setPokemonDetails(data);
    });
  };

  useEffect(() => {
    getData();
  }, [pokemon]);

  return (
    <div className="list">
      {pokemonDetails && (
        <li key={index}>
          <div className="card">
            {pokemonDetails.sprites && (
              <img src={pokemonDetails.sprites.back_default} alt="pokemon" />
            )}
            <h2>{pokemonDetails.name?.toUpperCase()}</h2>
            <p>Weight:{pokemonDetails?.weight}</p>
            <p>Height:{pokemonDetails?.height}</p>
          </div>
        </li>
      )}
    </div>
  );
};
export default ListItem;
