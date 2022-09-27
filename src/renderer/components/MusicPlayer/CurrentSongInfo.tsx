import React from "react";
import { Group, Avatar, Text } from "@mantine/core";
import { IconMusic } from "@tabler/icons";

function CurrentSongInfo() {
  return (
    <Group>
      <Avatar>
        <IconMusic size={80} />
      </Avatar>
      <div>
        <Text weight={700} size="sm">
          Current song title
        </Text>
        <Text size="xs">Youtube</Text>
      </div>
    </Group>
  );
}

export default CurrentSongInfo;
