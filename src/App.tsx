import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
