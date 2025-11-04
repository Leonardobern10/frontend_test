import { createTheme, type Theme } from "@mui/material";

let baseTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#FF0",
      light: "rgba(252, 252, 91, 1)",
      dark: "rgba(138, 138, 2, 1)",
      contrastText: "#000",
    },
    secondary: {
      main: "#FF15",
      light: "rgba(254, 254, 128, 0.65)",
      dark: "rgba(123, 123, 11, 0.56)",
      contrastText: "#FFF",
    },
  },
});

let theme = createTheme(baseTheme, {
  typography: {
    h1: {
      fontSize: "5rem",
    },
    body1: {
      fontSize: "2rem",
    },
  },
});

export default theme;
