import { useMantineTheme, useMantineColorScheme } from "@mantine/core";

const useTheme = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === "dark";

  return { dark, theme, toggleColorScheme };
};

export default useTheme;
