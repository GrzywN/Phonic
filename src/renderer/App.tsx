import React, { useState } from "react";

import { AppShell, Tabs } from "@mantine/core";
import { IconFiles, IconBrandYoutube, IconBrandSpotify } from "@tabler/icons";

import HeaderPanel from "./components/layout/HeaderPanel";
import NavbarPanel from "./components/layout/NavbarPanel";
import AsidePanel from "./components/layout/AsidePanel";
import FooterPanel from "./components/layout/FooterPanel";

import { LocalFilesTab, YoutubeTab, SpotifyTab } from "./components/tabs";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuHandler = () => setMenuOpened((prevState) => !prevState);

  return (
    <AppShell
      header={<HeaderPanel opened={menuOpened} handleMenu={menuHandler} />}
      navbar={<NavbarPanel opened={menuOpened} />}
      aside={<AsidePanel />}
      footer={<FooterPanel />}
    >
      <Tabs defaultValue="localFiles" color="orange">
        <Tabs.List>
          <Tabs.Tab value="localFiles" icon={<IconFiles />}>
            Local files
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<IconBrandYoutube />}>
            Youtube
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<IconBrandSpotify />}>
            Spotify
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="localFiles" p="md" style={{ height: "100%" }}>
          <LocalFilesTab />
        </Tabs.Panel>
        <Tabs.Panel value="messages" p="md">
          <YoutubeTab />
        </Tabs.Panel>
        <Tabs.Panel value="settings" p="md">
          <SpotifyTab />
        </Tabs.Panel>
      </Tabs>
    </AppShell>
  );
}

export default App;
