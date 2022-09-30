import React from "react";
import { Group, ActionIcon, Slider } from "@mantine/core";
import { IconVolume, IconVolume2, IconVolume3 } from "@tabler/icons";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { playerActions } from "../../store/player-slice";

function Volume() {
  const dispatch = useDispatch();

  const volume = useSelector(({ player }: RootState) => player.volume);

  const volumeHandler = (value: number) => {
    dispatch(playerActions.setVolume(value));
  };

  const muteHandler = () => {
    volume > 0
      ? dispatch(playerActions.setVolume(0))
      : dispatch(playerActions.setVolume(100));
  };

  const renderVolumeIcon = () => {
    const full = <IconVolume />;
    const medium = <IconVolume2 />;
    const muted = <IconVolume3 />;

    if (volume === 0) return muted;
    if (volume < 70) return medium;
    return full;
  };

  return (
    <Group style={{ maxWidth: "12rem", width: "100%", justifySelf: "end" }}>
      <ActionIcon onClick={muteHandler}>{renderVolumeIcon()}</ActionIcon>
      <Slider
        value={volume}
        onChange={volumeHandler}
        label={null}
        size="sm"
        color="gray"
        style={{ flexGrow: 1 }}
      />
    </Group>
  );
}

export default Volume;
