import type { PaletteColor, PaletteOptions } from "@mui/material";

const button = (palette: PaletteOptions) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        backgroundColor: (palette.primary as PaletteColor).contrastText,
      },
    },
  },
});

export default button;
