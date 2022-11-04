import React from "react";
import { Header } from "@mantine/core";
import Logo from "./Logo";
import DarkModeSwitcher from "./DarkModeSwitcher";
import BurgerButton from "./BurgerButton";

type HeaderPanelProps = {
  opened: boolean;
  handleMenu: () => void;
};

function HeaderPanel({ opened, handleMenu }: HeaderPanelProps) {
  return (
    <Header height={70} p="md" style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <BurgerButton opened={opened} handleMenu={handleMenu} />
      <Logo />
      <DarkModeSwitcher />
    </Header>
  );
}

export default HeaderPanel;
