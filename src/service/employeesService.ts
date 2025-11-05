import axios, { type AxiosResponse } from 'axios';
import type { Employee } from '../model/Employee';

const url = 'http://localhost:3000';

export const getEmployees = async (page?: number, limit?: number) => {
     try {
          const response: AxiosResponse = await axios.get(`${url}/users`, {
               params: {
                    page: page ? page : 1,
                    limit: limit ? limit : 10,
               },
          });
          console.log(response.data);
          return response.data;
     } catch (error) {
          console.error(error);
     }
};

export const getData = async (
     setList: (employess: Employee[]) => void,
     setTotalPages: (totalPages: number) => void,
     setCurrentPage: (currentPage: number) => void,
     currentPage?: number,
): Promise<void> => {
     let data = await getEmployees(currentPage);
     setList(data.data);
     setCurrentPage(data.page);
     setTotalPages(data.totalPages);
};
