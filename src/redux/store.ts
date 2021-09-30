import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
