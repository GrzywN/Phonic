import React, { useState } from "react";

import { Title, Stack, Divider, Autocomplete } from "@mantine/core";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import LocalFilesListItem from "../../LocalFilesListItem";
import OpenFiles from "./OpenFiles";

function LocalFilesTab() {
  const [filter, setFilter] = useState("");

  const list = useSelector(({ localFilesList }: RootState) => localFilesList.list);

  const listItems = list
    .filter((item) => item.name.includes(filter))
    .map((item, index) => <LocalFilesListItem item={item} index={index + 1} key={item.id} />);

  return (
    <div>
      <Stack mt="lg">
        <OpenFiles />
        <Divider my="md" />
        <Autocomplete
          value={filter}
          onChange={setFilter}
          placeholder="Search for your songs"
          data={list.map((item) => item.name)}
          style={{ alignSelf: "end" }}
          size="md"
        />
        {list && <Stack spacing="lg">{list && listItems}</Stack>}
        {list.length === 0 && (
          <Title order={3} align="center">
            Imagine that there are the songs you can add to your queue or playlist.
          </Title>
        )}
      </Stack>
    </div>
  );
}

export default LocalFilesTab;
