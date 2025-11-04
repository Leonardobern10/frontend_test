import { createTheme, type Theme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import { spacing } from "./format";
import { shape } from "./format";
import button from "./components/button";

const theme: Theme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  components: {
    ...button(palette),
  },
});

export default theme;
