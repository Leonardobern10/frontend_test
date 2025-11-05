import { Card, Stack, styled, Typography, type CardProps } from '@mui/material';

const CardEmployeeBase = styled(Card)<CardProps>(({ theme }) => ({
     backgroundColor: theme.palette.background.paper,
     border: `2px solid ${theme.palette.primary.main}`,
     color: theme.palette.primary.dark,
     width: 'fit-content',
}));

export default function CardEmployee({
     nome,
     cargo,
     idade,
}: {
     nome: string;
     cargo: string;
     idade: number;
}) {
     return (
          <CardEmployeeBase>
               <Typography variant="body2">{nome}</Typography>
               <Stack
                    direction="row"
                    spacing={3}>
                    <Typography
                         color="secondary"
                         variant="body1">
                         {idade}
                    </Typography>
                    <Typography
                         variant="body1"
                         color="secondary">
                         {cargo}
                    </Typography>
               </Stack>
          </CardEmployeeBase>
     );
}
