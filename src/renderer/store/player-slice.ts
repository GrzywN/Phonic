/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

enum RepeatStatuses {
  REPEAT,
  REPEAT_ONCE,
  NO_REPEAT,
}

interface PlayerState {
  title: string;
  source: string;
  shuffle: boolean;
  isPlaying: boolean;
  repeat: RepeatStatuses;
  totalLength: number;
  currentSecond: number;
  volume: number;
}

const initialState: PlayerState = {
  title: "Current song title",
  source: "Youtube",
  isPlaying: false,
  shuffle: false,
  repeat: RepeatStatuses.NO_REPEAT,
  totalLength: 83,
  currentSecond: 0,
  volume: 50,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setSource(state, action) {
      state.source = action.payload;
    },
    switchShuffle(state) {
      state.shuffle = !state.shuffle;
    },
    switchIsPlaying(state) {
      state.isPlaying = !state.isPlaying;
    },
    switchRepeat(state) {
      if (state.repeat === RepeatStatuses.NO_REPEAT) {
        state.repeat = RepeatStatuses.REPEAT;
      } else if (state.repeat === RepeatStatuses.REPEAT) {
        state.repeat = RepeatStatuses.REPEAT_ONCE;
      } else if (state.repeat === RepeatStatuses.REPEAT_ONCE) {
        state.repeat = RepeatStatuses.NO_REPEAT;
      } else {
        throw new Error("player-slice: Invalid RepeatStatus");
      }
    },
    setCurrentSongSecond(state, action) {
      state.currentSecond = action.payload;
    },
    setVolume(state, action) {
      state.volume = action.payload;
    },
  },
});

const playerActions = playerSlice.actions;

export { playerActions, RepeatStatuses };

export default playerSlice;
