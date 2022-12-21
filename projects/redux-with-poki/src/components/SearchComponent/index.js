import React, { useState } from "react";
import "./index.css";

const SearchComponent = ({ searchData, resetData }) => {
  const [search, setSearch] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    searchData(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // searchData(search);
    setDisabled(true);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSearch("");
    resetData();
    setDisabled(false);
  };

  const handleSelect = (event) => {
    const sort = event.target.value;
    setSelectedOption(sort);
  };

  return (
    <div className="search">
      <form>
        <input
          className="searchinput"
          onChange={handleChange}
          name="pokemon"
          type="text"
          value={search}
        ></input>
        <button className="submit" onClick={handleSubmit} disabled={isDisabled}>
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
export default SearchComponent;
