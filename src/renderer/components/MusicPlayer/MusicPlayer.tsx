import React from "react";

import { Stack, Group, ActionIcon, Text, Slider } from "@mantine/core";
import {
  IconArrowsShuffle,
  IconPlayerSkipBack,
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerSkipForward,
  IconRepeat,
  IconRepeatOnce,
  IconRepeatOff,
} from "@tabler/icons";

import usePlayer from "../../hooks/usePlayer";
import { RepeatStatuses } from "../../store/player-slice";

const getTimeFromSeconds = (seconds: number) => {
  const extractedMinutes = Math.floor(seconds / 60).toString(10);
  let extractedSeconds = Math.floor(seconds % 60).toString(10);

  if (extractedSeconds.length === 1) {
    extractedSeconds = `0${extractedSeconds}`;
  }

  return `${extractedMinutes}:${extractedSeconds}`;
};

function MusicPlayer() {
  const {
    shuffle,
    playing,
    repeat,
    currentSecond,
    totalLength,
    shuffleHandler,
    playPauseHandler,
    repeatHandler,
    currentTimeHandler,
  } = usePlayer();

  return (
    <Stack spacing="xs" align="center">
      <Group>
        <ActionIcon onClick={shuffleHandler}>
          {shuffle ? <IconArrowsShuffle color="orange" /> : <IconArrowsShuffle />}
        </ActionIcon>
        <ActionIcon size="lg">
          <IconPlayerSkipBack size={32} />
        </ActionIcon>
        <ActionIcon onClick={playPauseHandler} size="xl">
          {playing ? <IconPlayerPause size={40} /> : <IconPlayerPlay size={40} />}
        </ActionIcon>
        <ActionIcon size="lg">
          <IconPlayerSkipForward size={32} />
        </ActionIcon>
        <ActionIcon onClick={repeatHandler}>
          {repeat === RepeatStatuses.REPEAT && <IconRepeat color="orange" />}
          {repeat === RepeatStatuses.REPEAT_ONCE && <IconRepeatOnce color="orange" />}
          {repeat === RepeatStatuses.NO_REPEAT && <IconRepeatOff />}
        </ActionIcon>
      </Group>
      <Group style={{ maxWidth: "32rem", width: "100%" }}>
        <Text size="xs">{getTimeFromSeconds(currentSecond)}</Text>
        <Slider
          max={totalLength}
          value={currentSecond}
          onChange={currentTimeHandler}
          style={{ flexGrow: 1 }}
          size="sm"
          color="gray"
          label={null}
          thumbLabel="Current second"
        />
        <Text size="xs">-{getTimeFromSeconds(totalLength - currentSecond)}</Text>
      </Group>
    </Stack>
  );
}

export default MusicPlayer;
