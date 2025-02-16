import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[700],
      dark: blue[800],
      light: blue[500],
      contrastText: "#FFF",
    },
    secondary: {
      main: green[500],
      dark: green[400],
      light: green[300],
      contrastText: "#FFF",
    },
    background: {
      default: "#171717",
      paper: "#1F1F1F",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
