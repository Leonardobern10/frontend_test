import { Card, styled, type CardProps } from "@mui/material";
import type { Employee } from "../../model/Employee";
import CardEmployee from "./CardEmployee";

const CardListEmployeeBase = styled(Card)<CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  border: `2px solid ${theme.palette.primary.main}`,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

export default function CardListEmployee({ list }: { list: Employee[] }) {
  return (
    <CardListEmployeeBase>
      {list?.map((el) => (
        <CardEmployee
          nome={el.nome}
          cargo={el.cargo}
          idade={el.idade}
          key={el.id}
        />
      ))}
    </CardListEmployeeBase>
  );
}
