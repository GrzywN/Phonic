import React from "react";

import { Stack, Title } from "@mantine/core";

import QueueItem from "../QueueItem";

import useQueue from "../../hooks/useQueue";

function Queue() {
  const { items } = useQueue();

  return (
    <Stack title="Queue">
      <Title order={2} pb="lg">
        Queue
      </Title>
      {items.map((item) => (
        <QueueItem item={item} key={item.id} />
      ))}
    </Stack>
  );
}

export default Queue;
