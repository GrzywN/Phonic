/* eslint-disable no-param-reassign */

import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { ListItem } from "../../types/ListItem";
import { playerActions } from "./player-slice";

interface QueueState {
  items: ListItem[];
}

const initialState: QueueState = {
  items: [],
};

const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    addItem(state, action: { payload: ListItem }) {
      const addedItem: ListItem = action.payload;

      const addedItemId = addedItem.id;
      const idArray = state.items.map((item) => item.id);
      const isAlreadyInQueue = idArray.find((id) => id === addedItemId);

      if (isAlreadyInQueue) return;

      state.items = [...state.items, addedItem];
    },
    removeItem(state, action: { payload: ListItem }) {
      const removedItem = action.payload;

      const removedItemId = removedItem.id;
      const idArray = state.items.map((item) => item.id);
      const indexOfRemovedItem = idArray.indexOf(removedItemId);

      state.items.splice(indexOfRemovedItem, 1);
    },
    playItem(state, action: { payload: ListItem }) {
      const playedItem = action.payload;

      const playedItemId = playedItem.id;
      const idArray = state.items.map((item) => item.id);
      const indexOfPlayedItem = idArray.indexOf(playedItemId);

      if (indexOfPlayedItem === -1) return;

      state.items = [
        playedItem,
        ...state.items.slice(indexOfPlayedItem + 1),
        ...state.items.slice(0, indexOfPlayedItem),
      ];
    },
  },
});

const updatePlayerState = (queueItem: ListItem) => {
  return (dispatch) => {
    const { name, source } = queueItem;

    dispatch(playerActions.setTitle(name));
    dispatch(playerActions.setSource(source));
    dispatch(playerActions.switchIsPlaying()); // play
  };
};

const queueActions = queueSlice.actions;

export { queueActions, updatePlayerState };

export default queueSlice;
