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
  totalTrackLength: number;
  currentTrackSecond: number;
  volume: number;
}

const initialState: PlayerState = {
  title: "Current song title",
  source: "Youtube",
  isPlaying: false,
  shuffle: false,
  repeat: RepeatStatuses.NO_REPEAT,
  totalTrackLength: 83,
  currentTrackSecond: 0,
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

      // TODO: Dodać shuffle do akcji queue, oprócz pierwszego
      // wszystkie mają się losować
      // stan musi być zachowany, aby potem go z powrotem przywrócić
    },
    switchIsPlaying(state) {
      state.isPlaying = !state.isPlaying;

      // TODO: Może wywalić błąd
      // state.isPlaying ? state.audio.play() : state.audio.pause();
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
    setTotalTrackLength(state, action) {
      state.totalTrackLength = action.payload;
    },
    setCurrentTrackSecond(state, action) {
      state.currentTrackSecond = action.payload;

      // state.audio.currentTime = state.currentTrackSecond;
    },
    setVolume(state, action) {
      state.volume = action.payload;

      // state.audio.volume = state.volume / 100;
    },
  },
});

const playerActions = playerSlice.actions;

export { playerActions, RepeatStatuses };

export default playerSlice;
