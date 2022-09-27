import React, { useState } from "react";
import { Group, ActionIcon, Slider } from "@mantine/core";
import { IconVolume, IconVolume2, IconVolume3 } from "@tabler/icons";

function Volume() {
  const [volume, setVolume] = useState(50);

  const handleMute = () => {
    volume > 0 ? setVolume(0) : setVolume(100);
  };

  return (
    <Group style={{ maxWidth: "12rem", width: "100%", justifySelf: "end" }}>
      <ActionIcon onClick={handleMute}>
        {volume === 0 ? (
          <IconVolume3 />
        ) : volume > 70 ? (
          <IconVolume />
        ) : (
          <IconVolume2 />
        )}
      </ActionIcon>
      <Slider
        value={volume}
        onChange={setVolume}
        label={null}
        size="sm"
        color="gray"
        style={{ flexGrow: 1 }}
      />
    </Group>
  );
}

export default Volume;
