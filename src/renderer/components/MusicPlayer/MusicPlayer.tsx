import React, { useState } from "react";

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

enum RepeatStatuses {
  REPEAT,
  REPEAT_ONCE,
  NO_REPEAT,
}

const getTimeFromSeconds = (seconds: number) => {
  const extractedMinutes = Math.floor(seconds / 60).toString(10);
  let extractedSeconds = Math.floor(seconds % 60).toString(10);

  if (extractedSeconds.length === 1) {
    extractedSeconds = `0${extractedSeconds}`;
  }

  return `${extractedMinutes}:${extractedSeconds}`;
};

function MusicPlayer() {
  const [currentSongLength] = useState(83);
  const [currentSongSecond, setCurrentSongSecond] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeatStatus, setRepeatStatus] = useState<RepeatStatuses>(
    RepeatStatuses.NO_REPEAT
  );

  const handlePlayPause = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  const handleShuffle = () => {
    setShuffle((prevShuffle) => !prevShuffle);
  };

  const handleRepeat = () => {
    setRepeatStatus((prevStatus) => {
      switch (true) {
        case prevStatus === RepeatStatuses.NO_REPEAT: {
          return RepeatStatuses.REPEAT;
        }
        case prevStatus === RepeatStatuses.REPEAT: {
          return RepeatStatuses.REPEAT_ONCE;
        }
        case prevStatus === RepeatStatuses.REPEAT_ONCE: {
          return RepeatStatuses.NO_REPEAT;
        }
        default: {
          throw new Error("MusicPlayer: Invalid repeat status");
        }
      }
    });
  };

  return (
    <Stack spacing="xs" align="center">
      <Group>
        <ActionIcon onClick={handleShuffle}>
          {shuffle ? (
            <IconArrowsShuffle color="orange" />
          ) : (
            <IconArrowsShuffle />
          )}
        </ActionIcon>
        <ActionIcon size="lg">
          <IconPlayerSkipBack size={32} />
        </ActionIcon>
        <ActionIcon onClick={handlePlayPause} size="xl">
          {playing ? (
            <IconPlayerPause size={40} />
          ) : (
            <IconPlayerPlay size={40} />
          )}
        </ActionIcon>
        <ActionIcon size="lg">
          <IconPlayerSkipForward size={32} />
        </ActionIcon>
        <ActionIcon onClick={handleRepeat}>
          {repeatStatus === RepeatStatuses.REPEAT && (
            <IconRepeat color="orange" />
          )}
          {repeatStatus === RepeatStatuses.REPEAT_ONCE && (
            <IconRepeatOnce color="orange" />
          )}
          {repeatStatus === RepeatStatuses.NO_REPEAT && <IconRepeatOff />}
        </ActionIcon>
      </Group>
      <Group style={{ maxWidth: "32rem", width: "100%" }}>
        <Text size="xs">{getTimeFromSeconds(currentSongSecond)}</Text>
        <Slider
          max={currentSongLength}
          value={currentSongSecond}
          onChange={setCurrentSongSecond}
          style={{ flexGrow: 1 }}
          size="sm"
          color="gray"
          label={null}
          thumbLabel="Current second"
        />
        <Text size="xs">
          -{getTimeFromSeconds(currentSongLength - currentSongSecond)}
        </Text>
      </Group>
    </Stack>
  );
}

export default MusicPlayer;
