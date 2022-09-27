import React, { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

function ImportPlaylist() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Import Playlist"
      >
        Modal content
      </Modal>

      <Group position="center">
        <Button
          radius={0}
          color="orange"
          variant="outline"
          fullWidth
          onClick={() => setOpened(true)}
        >
          Import Playlist
        </Button>
      </Group>
    </>
  );
}

export default ImportPlaylist;
