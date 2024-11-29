import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme/theme";
import DragDrop from "./components/DragDrop";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <DragDrop />
    </ThemeProvider>
  );
}

export default App;
