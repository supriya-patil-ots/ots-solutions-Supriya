import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { searchPokemon } from "../../store";

import "./index.css";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const q = event.target.value;
    setQuery(q);
    // pass reducer function in dispatch to store data in state store
    dispatch(searchPokemon(q));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleReset = (event) => {};
  const handleSelect = (event) => {};

  /*  useEffect(() => {
    if (searchTerm != "") {
      const filteredData = mockTraineesData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);
*/

  return (
    <div className="search">
      <form>
        <input
          className="searchinput"
          onChange={handleChange}
          name="pokemon"
          type="text"
          value={query}
        ></input>
        <button className="submit" onClick={handleSubmit} disabled={false}>
          Search
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        <label htmlFor="pokemons">Choose Pokemon: </label>
        <select name="pokemons" id="pokemons" onChange={handleSelect}>
          <option value="Long">Long</option>
          <option value="medium">Medium</option>
          <option value="short">Short</option>
        </select>
      </form>
    </div>
  );
};
export default Search;
