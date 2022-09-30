import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./player-slice";

const store = configureStore({ reducer: { player: playerSlice.reducer } });

export type RootState = ReturnType<typeof store.getState>;

export default store;
