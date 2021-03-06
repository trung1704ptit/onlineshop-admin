// src/App.tsx
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { notAuthenticatedRoutes, routes as appRoutes } from "./routes";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  // define theme
  const theme = createTheme({
    // palette: {
    //   primary: {
    //     light: "#63b8ff",
    //     main: "#0989e3",
    //     dark: "#005db0",
    //     contrastText: "#000",
    //   },
    //   secondary: {
    //     main: "#4db6ac",
    //     light: "#82e9de",
    //     dark: "#00867d",
    //     contrastText: "#000",
    //   },
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <BrowserRouter>
          <Layout>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <Routes>
            {notAuthenticatedRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
