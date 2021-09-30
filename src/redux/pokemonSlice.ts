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
    pokemon: {},
  },
  reducers: {
    setPokemon(state, { payload }) {
      let moves = [];
      for (let i = 0; i < 4; i++) {
        moves.push(payload.moves[i].move.name);
      }
      const pokemon = {
        id: payload.id,
        name: payload.name,
        stats: payload.stats.map((s: any) => s.base_stat),
        height: payload.height,
        weight: payload.weight,
        sprite: payload.sprites.front_default,
        xp: payload.base_experience,
        moves,
        speciesUrl: payload.species.url,
        types: payload?.types?.map((t: any) => t?.type?.name),
      };
      return {
        ...state,
        pokemon,
      };
    },
  },
  extraReducers: {
    [fetchPokemons.fulfilled.type]: (state: any, action: any) => {
      state.pokemons = action.payload.pokemons;
      state.nextUrl = action.payload.next;
    },
    [fetchNextPokemons.fulfilled.type]: (state: any, action: any) => {
      state.pokemons.push(...action.payload.pokemons);
      state.nextUrl = action.payload.next;
    },
  },
});

export const { setPokemon } = slice.actions;

export default slice.reducer;
