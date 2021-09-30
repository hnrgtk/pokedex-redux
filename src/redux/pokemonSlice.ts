import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getPokemonByName } from "../api/getPokemonByName";

import { getPokemons } from "../api/getPokemons";
import { Pokemon } from "../types";

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

export const fetchPokemonByName = createAsyncThunk(
  "pokemon/getPokemonByName",
  async (name: string, { dispatch }) => {
    const data = await getPokemonByName(name);
    dispatch(setPokemon(data));
  }
);

interface SliceState {
  pokemon: Pokemon;
  pokemons: any[];
  nextUrl: string;
}

const initialState = {
  nextUrl: "",
  pokemons: [],
  pokemon: {
    height: 0,
    id: 0,
    moves: [],
    name: "",
    speciesUrl: "",
    sprite: "",
    sprites: {
      front_default: "",
    },
    stats: [],
    types: [],
    weight: 0,
    xp: 0,
    flavorText: "",
    weakness: [],
  },
} as SliceState;

export const slice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon(state, action: PayloadAction<any>) {
      let moves = [];
      for (let i = 0; i < 4; i++) {
        moves.push(action.payload.moves[i].move.name);
      }
      const pokemon = {
        id: action.payload.id,
        name: action.payload.name,
        stats: action.payload.stats.map((s: any) => s.base_stat),
        height: action.payload.height,
        weight: action.payload.weight,
        sprite: action.payload.sprites.front_default,
        xp: action.payload.base_experience,
        moves,
        speciesUrl: action.payload.species.url,
        types: action.payload?.types?.map((t: any) => t.type.name),
        flavorText: action.payload.flavorText,
        weakness: action.payload.weakness,
      } as Pokemon;

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
