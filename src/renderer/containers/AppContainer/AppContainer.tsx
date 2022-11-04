import React from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";

import { Provider } from "react-redux";
import store from "../../store";
import AudioContainer from "../AudioContainer";

type AppContainerProps = {
  children: React.ReactNode;
};

function AppContainer({ children }: AppContainerProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <Provider store={store}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            fontFamily: "'Fira Code', monospace",
          }}
        >
          <AudioContainer>{children}</AudioContainer>
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  );
}

export default AppContainer;
