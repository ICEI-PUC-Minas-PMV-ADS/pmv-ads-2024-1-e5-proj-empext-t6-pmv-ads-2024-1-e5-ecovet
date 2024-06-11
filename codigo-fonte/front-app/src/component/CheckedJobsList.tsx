import {
  Box,
  CircularProgress,
  Pagination,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { get } from '../services/agent'
import { fakeData } from "../data";
import JobCard from "./JobCard";
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector } from 'react-redux'

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

const itemPerPage = 6;

const CheckedJobsList = () => {
  const { name, id, userName, role } = useSelector((state: RootState) => state.user)
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState<Boolean>(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, jobs.length);
  const visibleData = jobs.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };


  const getJobs = async() => {
    console.log("====== getJobs")
    setloading(true)
    try {
      const response = await get(
        `Candidatura/Veterinario/${id}`
      );
      if (response) {
        let parsed = response.map((x:any) => {
          x.vaga.clinicaVaga = x.clinicaVeterinaria
          return x;
        })
        console.log("====== parsed")
        console.log(parsed)
        setTotalCount(parsed.length);
        setJobs(parsed)
        setloading(false)
      } else {
        setloading(false)
        console.error("Erro ao obter dados do veterinário");
      }
    } catch (error) {
      setloading(false)
      console.error("Erro ao buscar veterinário:", error);
    }
  }


  useEffect(() => {
    getJobs();
  }, []);


  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      gap={5}
      alignItems={"center"}
      justifyContent={"center"}
    >
    {
      loading ?
        <Box>
          <CircularProgress color="inherit" />
        </Box>
      :
      //@ts-ignore 
      // jobs?.map((item, index) => <JobCard job={item.vaga} role={role} key={index} applied={true} />)
      visibleData && jobs.length && (<>
      {
         //@ts-ignore 
      jobs?.map((item, index) => <JobCard job={item.vaga} role={role} key={index} applied={true} />)


      }

          {totalCount > 0 && totalCount > itemPerPage && (
            <Pagination
              page={currentPage}
              onChange={handlePageChange}
              count={Math.ceil(totalCount / itemPerPage)}
              color="primary"
            />
          )}
      </>)
    }
  
    </Box>
  );
};

export default CheckedJobsList;
