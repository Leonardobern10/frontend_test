import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import type { Employee } from './model/Employee';
import { getData } from './service/employeesService';
import CardListEmployee from './theme/ui/CardListEmployee';
import PageButton from './theme/ui/PageButton';

function App() {
     const [list, setList] = useState<Employee[] | null>(null);
     const [totalPages, setTotalPages] = useState(0);
     const [currentPage, setCurrentPage] = useState(0);

     useEffect(() => {
          getData(setList, setTotalPages, setCurrentPage);
     }, []);

     return (
          <Box
               sx={{
                    padding: 4,
               }}>
               <Typography variant="h1">Cadastro de funcionários</Typography>
               <Typography variant="body1">Texto para exemplo</Typography>
               {list ? (
                    <CardListEmployee list={list} />
               ) : (
                    <Box>
                         <Typography color="error">
                              Erro ao obter lista!
                         </Typography>
                    </Box>
               )}
               <Stack
                    direction="row"
                    spacing={3}>
                    {Array.from({ length: totalPages }, (_, i) =>
                         currentPage === i + 1 ? (
                              <PageButton
                                   key={i + 1}
                                   pageNumber={i + 1}
                                   current
                                   setList={setList}
                                   setCurrentPage={setCurrentPage}
                                   setTotalPages={setTotalPages}
                              />
                         ) : (
                              <PageButton
                                   key={i + 1}
                                   pageNumber={i + 1}
                                   setList={setList}
                                   setCurrentPage={setCurrentPage}
                                   setTotalPages={setTotalPages}
                              />
                         ),
                    )}
               </Stack>
          </Box>
     );
}

export default App;
