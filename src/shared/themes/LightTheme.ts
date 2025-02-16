import { createTheme } from "@mui/material";
import { cyan, green, grey } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: cyan[700],
      dark: cyan[800],
      light: cyan[500],
      contrastText: "#FFF",
    },
    secondary: {
      main: green[500],
      dark: green[400],
      light: green[300],
      contrastText: "#FFF",
    },
    background: {
      default: "#FFF",
      paper: grey[200],
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
