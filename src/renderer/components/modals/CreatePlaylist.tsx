import React, { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

function CreatePlaylist() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Playlist"
      >
        Modal content
      </Modal>

      <Group position="center">
        <Button
          radius={0}
          color="orange"
          fullWidth
          onClick={() => setOpened(true)}
        >
          Create Playlist
        </Button>
      </Group>
    </>
  );
}

export default CreatePlaylist;
