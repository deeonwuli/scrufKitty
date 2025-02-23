import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Game from "./components/game/Game";
import "./App.css";

const App = () => (
  <ThemeProvider theme={theme}>
    <Game />
  </ThemeProvider>
);

export default App;
