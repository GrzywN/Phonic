import React from "react";

import { Paper, Group, Button, Title, Text } from "@mantine/core";
import { IconPlayerPlay, IconList } from "@tabler/icons";
import useTheme from "../../hooks/useTheme";
import useQueue from "../../hooks/useQueue";

import type { ListItem } from "../../../types";

type LocalFilesListItemProps = {
  item: ListItem;
  index: number;
};

function LocalFilesListItem({ item, index }: LocalFilesListItemProps) {
  if (index <= 0) {
    throw new Error("ListItem: Given index cannot be less or equal zero");
  }

  const { dark, theme } = useTheme();
  const { addToQueueHandler } = useQueue();

  return (
    <Paper
      style={{
        backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[2],
      }}
      shadow="xs"
      p="xs"
    >
      <Group align="center">
        <Title order={3} aria-hidden>
          {index < 10 ? `0${index}` : index}.
        </Title>
        <Text weight={700} size="sm">
          {item.name}
        </Text>
        <Group style={{ marginLeft: "auto" }}>
          <Button
            onClick={() => addToQueueHandler(item)}
            variant="outline"
            color="orange"
            title="Add to queue"
          >
            <IconList color="orange" />
          </Button>
          <Button variant="outline" color="orange" title="Play">
            <IconPlayerPlay color="orange" />
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}

export default LocalFilesListItem;
