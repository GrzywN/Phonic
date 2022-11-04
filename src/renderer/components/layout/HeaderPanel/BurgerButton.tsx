import React from "react";
import { MediaQuery, Burger } from "@mantine/core";
import useTheme from "../../../hooks/useTheme";

type BurgerButtonProps = {
  opened: boolean;
  handleMenu: () => void;
};

function BurgerButton({ opened, handleMenu }: BurgerButtonProps) {
  const { theme } = useTheme();

  return (
    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
      <Burger opened={opened} onClick={handleMenu} size="sm" color={theme.colors.gray[6]} mr="xl" />
    </MediaQuery>
  );
}

export default BurgerButton;
