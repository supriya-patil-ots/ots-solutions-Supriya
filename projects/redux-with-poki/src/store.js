import { configureStore, createSlice } from "@reduxjs/toolkit";

// configureStore: helps to create store => returns store object
// createSlice: helps to create reducers

const initialState = {};

const pokemons = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemons: (state, action) => {
      state.list = action.payload;
    },
    updatePokemon: (state, action) => {
      const { name, id, height, weight, sprites } = action.payload;
      const index = state.list.findIndex((pokemon) => pokemon.name == name);
      state.list[index].id = id;
      state.list[index].height = height;
      state.list[index].weight = weight;
      state.list[index].img = sprites.back_default;
    },
    searchPokemon: (state, action) => {
      console.log(state.list.name);
      const { q } = action.payload;
      // filteredData is getting empty array need help
      const filteredData = state.list.filter((pokemon) =>
        pokemon.name.includes(q)
      );
      //my search list is getting empty after search need help..
      state.search_list = filteredData;
    },
  },
});

export const { addPokemons, updatePokemon, searchPokemon } = pokemons.actions;

export const store = configureStore({
  reducer: {
    pokemons: pokemons.reducer,
  },
});
