import { Button, Typography } from '@mui/material';
import type { Employee } from '../../model/Employee';
import { getData } from '../../service/employeesService';

export default function PageButton({
     pageNumber,
     current,
     setList,
     setTotalPages,
     setCurrentPage,
}: {
     pageNumber: number;
     current?: boolean;
     setList: (employees: Employee[]) => void;
     setTotalPages: (totalPages: number) => void;
     setCurrentPage: (currentPage: number) => void;
}) {
     const handleClick = (
          setList: (employees: Employee[]) => void,
          setTotalPages: (totalPages: number) => void,
          setCurrentPage: (currentPage: number) => void,
          pageNumber: number,
     ) => {
          getData(setList, setTotalPages, setCurrentPage, pageNumber);
     };

     return (
          <Button
               sx={{
                    width: 'fit-content',
                    padding: 0,
               }}
               onClick={() =>
                    handleClick(
                         setList,
                         setTotalPages,
                         setCurrentPage,
                         pageNumber,
                    )
               }>
               <Typography
                    variant="body1"
                    color={current ? 'secondary' : 'primary'}>
                    {pageNumber}
               </Typography>
          </Button>
     );
}
