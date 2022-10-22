import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Gradient, Root } from "./pages/home/styled.components";
import { Spin } from "./pages/spin";
import { marvelTheme } from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={marvelTheme}>
        <Root>
          <Gradient>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/spin" element={<Spin />} />
            </Routes>
          </Gradient>
        </Root>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
