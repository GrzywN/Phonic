import React from "react";
import { Footer } from "@mantine/core";
import { CurrentSongInfo, MusicPlayer, Volume } from "../../MusicPlayer";

function FooterPanel() {
  return (
    <Footer
      height={108}
      px="lg"
      py="md"
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 8fr 4fr",
        alignItems: "center",
      }}
    >
      <CurrentSongInfo />
      <MusicPlayer />
      <Volume />
    </Footer>
  );
}

export default FooterPanel;
