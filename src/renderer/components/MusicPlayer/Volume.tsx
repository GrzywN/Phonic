import React from "react";
import { Group, ActionIcon, Slider } from "@mantine/core";
import { IconVolume, IconVolume2, IconVolume3 } from "@tabler/icons";

import usePlayer from "../../hooks/usePlayer";

function Volume() {
  const { volume, volumeHandler, muteHandler } = usePlayer();

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
