import React from "react";
import { Group, Title, ActionIcon } from "@mantine/core";
import { IconHeadphones } from "@tabler/icons";

function Logo() {
  return (
    <Group>
      <Title style={{ fontFamily: "'Fira Code', monospace" }}>phonic</Title>
      <ActionIcon color="orange">
        <IconHeadphones size={64} />
      </ActionIcon>
    </Group>
  );
}

export default Logo;
