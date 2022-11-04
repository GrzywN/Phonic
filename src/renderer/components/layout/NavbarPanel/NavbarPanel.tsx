import React from "react";

import { Navbar, Stack, ScrollArea, Paper, Text } from "@mantine/core";
import { CreatePlaylist, ImportPlaylist } from "../../modals";
import useTheme from "../../../hooks/useTheme";

type NavbarPanelProps = {
  opened: boolean;
};

function NavbarPanel({ opened }: NavbarPanelProps) {
  const { dark, theme } = useTheme();

  const playlists = ["Example playlist 1", "Example playlist 2", "Example playlist 3"];

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Stack spacing="xs">
          {playlists.map((e) => (
            <Paper
              style={{
                backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[2],
              }}
              shadow="xs"
              p="xs"
              key={e}
            >
              <Text align="center">{e}</Text>
            </Paper>
          ))}
        </Stack>
      </Navbar.Section>
      <Navbar.Section mt="xl">
        <Stack>
          <CreatePlaylist />
          <ImportPlaylist />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavbarPanel;
