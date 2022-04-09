import { Light } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/layouts";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
    
  );
};
