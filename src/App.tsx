import { ThemeProvider } from "@material-ui/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Gradient, Root } from "./pages/home/styled.components";
import { Spin } from "./pages/spin";
import { marvelTheme } from "./theme";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
