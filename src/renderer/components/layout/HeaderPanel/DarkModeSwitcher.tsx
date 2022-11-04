import React from "react";
import { ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons";
import useTheme from "../../../hooks/useTheme";

function DarkModeSwitcher() {
  const { dark, toggleColorScheme } = useTheme();

  return (
    <ActionIcon
      ml="auto"
      color="orange"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme."
    >
      {dark ? <IconSun size={64} /> : <IconMoon size={64} />}
    </ActionIcon>
  );
}

export default DarkModeSwitcher;
