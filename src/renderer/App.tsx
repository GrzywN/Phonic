import React, { useState } from "react";

import { AppShell } from "@mantine/core";

import HeaderPanel from "./components/layout/HeaderPanel";
import NavbarPanel from "./components/layout/NavbarPanel";
import FooterPanel from "./components/layout/FooterPanel";

function App() {
  const [opened, setOpened] = useState(false);
  const handleBurgerClick = () => {
    setOpened((o) => !o);
  };

  return (
    <AppShell
      header={<HeaderPanel opened={opened} clickHandler={handleBurgerClick} />}
      navbar={<NavbarPanel opened={opened} />}
      footer={<FooterPanel />}
    >
      <div>App</div>
    </AppShell>
  );
}

export default App;
