import React, { useEffect, useState, useSelector } from "react";
import { useDispatch } from "react-redux";

import { updatePokemon } from "../../store";

import axios from "axios";
import "./index.css";

const ListItem = ({ pokemon }) => {
  const dispatch = useDispatch();

  const getData = () => {
    axios.get(pokemon.url).then((res) => {
      const data = res.data;
      //console.log(data);
      // pass reducer function in dispatch to store data in state store
      dispatch(updatePokemon(data));
    });
  };

  useEffect(() => {
    getData();
  }, [pokemon]);

  return (
    <div className="list">
      {pokemon && (
        <li>
          <div className="card">
            {pokemon.img && <img src={pokemon.img} alt="pokemon" />}
            <h2>{pokemon.name?.toUpperCase()}</h2>
            <p>Weight:{pokemon?.weight}</p>
            <p>Height:{pokemon?.height}</p>
          </div>
        </li>
      )}
    </div>
  );
};
export default ListItem;
