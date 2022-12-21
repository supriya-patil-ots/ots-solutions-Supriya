import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { addPokemons } from "../../store";

import ListItem from "../ListItem";
import "./index.css";

const List = () => {
  const dispatch = useDispatch();
  // to get data from store
  const pokemons = useSelector((state) => state.pokemons.list);

  const getData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => {
      var result = res.data.results;
      console.log(result);
      // pass reducer function in dispatch to store data in state store..
      dispatch(addPokemons(result));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="lists">
      {pokemons &&
        pokemons.map((pokemon, index) => (
          <ListItem key={index} pokemon={pokemon} index={index} />
        ))}
    </ul>
  );
};
export default List;
