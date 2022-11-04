import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./player-slice";
import localFilesListSlice from "./local-files-list-slice";
import queueSlice from "./queue-slice";

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    localFilesList: localFilesListSlice.reducer,
    queue: queueSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
