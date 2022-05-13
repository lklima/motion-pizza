import {
  SourceSerifPro_400Regular,
  SourceSerifPro_600SemiBold,
  SourceSerifPro_300Light,
  useFonts,
} from "@expo-google-fonts/source-serif-pro";
import { ThemeProvider } from "styled-components";

import Main from "./src/screens/Main";

import theme from "./src/global/styles/theme";

export default function App() {
  const [isFontLoaded] = useFonts({
    SourceSerifPro_400Regular,
    SourceSerifPro_600SemiBold,
    SourceSerifPro_300Light,
  });

  if (!isFontLoaded) {
    return <></>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
