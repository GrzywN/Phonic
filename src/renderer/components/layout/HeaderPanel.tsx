import React from "react";
import {
  useMantineTheme,
  useMantineColorScheme,
  Header,
  MediaQuery,
  Burger,
  Group,
  Title,
  ActionIcon,
} from "@mantine/core";
import { IconHeadphones, IconSun, IconMoon } from "@tabler/icons";

type HeaderPanelProps = {
  opened: boolean;
  clickHandler: () => void;
};

function HeaderPanel({ opened, clickHandler }: HeaderPanelProps) {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={clickHandler}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Group>
          <Title style={{ fontFamily: "'Fira Code', monospace" }}>phonic</Title>
          <ActionIcon color="orange">
            <IconHeadphones size={64} />
          </ActionIcon>
        </Group>
        <ActionIcon
          ml="auto"
          color="orange"
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme."
        >
          {dark ? <IconSun size={64} /> : <IconMoon size={64} />}
        </ActionIcon>
      </div>
    </Header>
  );
}

export default HeaderPanel;
