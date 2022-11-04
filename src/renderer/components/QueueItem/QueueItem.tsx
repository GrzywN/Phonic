import React from "react";

import { Paper, Group, Text, Button } from "@mantine/core";
import { IconX, IconPlayerPlay } from "@tabler/icons";

import useTheme from "../../hooks/useTheme";
import useQueue from "../../hooks/useQueue";

import type { ListItem } from "../../../types";

type QueueItemProps = {
  item: ListItem;
};

function QueueItem({ item }: QueueItemProps) {
  const { dark, theme } = useTheme();

  const { removeFromQueueHandler, playHandler } = useQueue();

  return (
    <Paper
      style={{
        backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[2],
      }}
      shadow="xs"
      p="xs"
    >
      <Group align="center">
        <Text weight={700} size="sm">
          {item.name}
        </Text>
        <Group style={{ marginLeft: "auto" }}>
          <Button
            onClick={() => removeFromQueueHandler(item)}
            variant="outline"
            color="orange"
            title="Remove from queue"
          >
            <IconX color="orange" />
          </Button>
          <Button onClick={() => playHandler(item)} variant="outline" color="orange" title="Play">
            <IconPlayerPlay color="orange" />
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}

export default QueueItem;
