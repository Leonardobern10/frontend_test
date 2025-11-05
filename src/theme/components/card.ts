import type { Theme } from '@mui/material';

const card = (theme: Theme) => ({
     MuiCard: {
          styleOverrides: {
               root: {
                    paddingLeft: theme.spacing(4),
                    paddingRight: theme.spacing(4),
                    paddingTop: theme.spacing(2),
                    paddingBottom: theme.spacing(2),
               },
          },
     },
});

export default card;
