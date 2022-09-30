import React from "react";
import { Group, Avatar, Text } from "@mantine/core";
import { IconMusic } from "@tabler/icons";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

function CurrentSongInfo() {
  const title = useSelector(({ player }: RootState) => player.title);
  const source = useSelector(({ player }: RootState) => player.source);

  return (
    <Group>
      <Avatar>
        <IconMusic size={80} />
      </Avatar>
      <div>
        <Text
          weight={700}
          size="sm"
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "16.25rem",
          }}
        >
          {title}
        </Text>
        <Text
          size="xs"
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "12.25rem",
          }}
        >
          {source}
        </Text>
      </div>
    </Group>
  );
}

export default CurrentSongInfo;
