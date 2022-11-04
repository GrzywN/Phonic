/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";
import { LocalFilesListItem } from "../../types/ListItem";

interface LocalFilesListState {
  list: LocalFilesListItem[];
}

const initialState: LocalFilesListState = {
  list: [],
};

const localFilesListSlice = createSlice({
  name: "localFilesList",
  initialState,
  reducers: {
    addItem(state, action: { payload: LocalFilesListItem }) {
      const addedItem: LocalFilesListItem = action.payload;

      state.list = [...state.list, addedItem];
    },
    removeItem(state, action: { payload: LocalFilesListItem }) {
      const removedItem = action.payload;

      state.list = state.list.filter((item) => item !== removedItem);
    },
  },
});

const localFilesListActions = localFilesListSlice.actions;

export { localFilesListActions };

export default localFilesListSlice;
