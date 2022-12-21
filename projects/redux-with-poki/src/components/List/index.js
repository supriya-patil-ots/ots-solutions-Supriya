import React, { useEffect } from "react";
import ListItem from "../ListItem";
import "./index.css";
const List = ({ pokemons }) => {
  return (
    <ul className="lists">
      {pokemons &&
        pokemons.map((pokemon, index) => (
          <ListItem pokemon={pokemon} index={index} />
        ))}
    </ul>
  );
};
export default List;
