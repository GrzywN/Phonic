import React, { useRef } from "react";

import { Stack, SimpleGrid, Title, Button, Text, Group } from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { IconUpload, IconMusic, IconX } from "@tabler/icons";

import { useDispatch } from "react-redux";
import { localFilesListActions } from "../../../store/local-files-list-slice";
import { IpcWindow, SourceTypes, LocalFilesListItem } from "../../../../types";

const audioMimeTypes = [
  "audio/basic",
  "audio/mid",
  "audio/mpeg",
  "audio/mp4",
  "audio/x-aiff",
  "audio/x-mpegurl",
  "audio/vnd.rn-realaudio",
  "audio/ogg",
  "audio/vorbis",
  "audio/vnd.wav",
];

let id = 0;

function OpenFiles() {
  const dispatch = useDispatch();
  const openRef = useRef<() => void>(null);

  const openFolderHandler = async () => {
    const folderFilePaths = (await (window as IpcWindow).api.openFolder()) as string[];

    folderFilePaths.forEach((filePath) => {
      const fileName = filePath.split("/").reverse()[0];

      const listItem: LocalFilesListItem = {
        id: id.toString(10),
        name: fileName,
        source: filePath,
        type: "",
        sourceType: SourceTypes.LOCAL_FILES,
      };

      id += 1;

      dispatch(localFilesListActions.addItem(listItem));
    });
  };

  const dropHandler = (files: FileWithPath[]) => {
    files.forEach((file) => {
      const listItem: LocalFilesListItem = {
        id: id.toString(10),
        name: file.name,
        source: file.path,
        type: file.type,
        sourceType: SourceTypes.LOCAL_FILES,
      };

      id += 1;

      dispatch(localFilesListActions.addItem(listItem));
    });
  };

  return (
    <Stack>
      <SimpleGrid cols={2}>
        <Title order={2}>You can import your local files here.</Title>
        <Group style={{ justifySelf: "flex-end" }}>
          <Button onClick={openFolderHandler} radius={0} color="orange">
            Open folder
          </Button>
          <Button onClick={() => openRef.current()} radius={0} color="orange" variant="outline">
            Open files
          </Button>
        </Group>
      </SimpleGrid>
      <Dropzone
        openRef={openRef}
        onDrop={dropHandler}
        accept={audioMimeTypes}
        useFsAccessApi={false}
      >
        <Group position="center" spacing="xl" style={{ pointerEvents: "none" }}>
          <Dropzone.Accept>
            <IconUpload size={50} stroke={1.5} color="orange" />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={50} stroke={1.5} color="orange" />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconMusic size={50} stroke={1.5} />
          </Dropzone.Idle>
          <div>
            <Text size="xl" inline>
              Drag music files here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, your files will appear on the list.
            </Text>
          </div>
        </Group>
      </Dropzone>
    </Stack>
  );
}

export default OpenFiles;
