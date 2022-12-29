import { ThemeProvider } from "styled-components";
import { RoutesApp } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <RoutesApp />
      </ThemeProvider>
    </Router>
  );
}
