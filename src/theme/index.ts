import { createTheme, type Theme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import { shape } from "./format";
import card from "./components/card";

const baseTheme: Theme = createTheme({
  palette,
  typography,
  shape,
  spacing: 8,
});

let theme: Theme = createTheme(baseTheme, {
  components: {
    ...card(baseTheme),
  },
});

export default theme;
