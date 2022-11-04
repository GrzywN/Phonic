import React from "react";
import { MediaQuery, Aside } from "@mantine/core";
import Queue from "../../Queue";

function AsidePanel() {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Queue />
      </Aside>
    </MediaQuery>
  );
}

export default AsidePanel;
