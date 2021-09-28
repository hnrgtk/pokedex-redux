import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPokemons } from "../api/getPokemons";

export const fetchPokemons = createAsyncThunk(
  "pokemon/getFirst20",
  async () => {
    const data = await getPokemons("offset=20&limit=20/");
    return data;
  }
);

export const fetchNextPokemons = createAsyncThunk(
  "pokemon/getNext20",
  async (arg, { getState }) => {
    const state: any = getState();
    const nextUrl = String(state.pokemon.nextUrl).split("?")[1];
    const data = await getPokemons(nextUrl + "/");
    return data;
  }
);

export const slice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    nextUrl: "",
  },
  reducers: {},
  extraReducers: {
    [fetchPokemons.fulfilled.type]: (state: any, action: any) => {
      state.pokemons.push(...action.payload.pokemons);
      state.nextUrl = action.payload.next;
    },
    [fetchNextPokemons.fulfilled.type]: (state: any, action: any) => {
      state.pokemons.push(...action.payload.pokemons);
      state.nextUrl = action.payload.next;
    },
  },
});

export default slice.reducer;
