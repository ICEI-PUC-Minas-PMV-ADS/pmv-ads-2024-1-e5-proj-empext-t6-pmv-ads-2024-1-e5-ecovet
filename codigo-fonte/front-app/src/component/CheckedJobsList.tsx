import {
  Box,
  CircularProgress,
  Pagination,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fakeData } from "../data";
import JobCard from "./JobCard";

const TypographyModel = styled(Typography)({
  fontFamily: "red-hat-display",
});

const itemPerPage = 6;

const CheckedJobsList = () => {
  const [jobs, setJobs] = useState<any[] | null>(null);
  const [loading, setloading] = useState<Boolean>(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, fakeData.length);
  const visibleData = fakeData.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setloading(true);
    const getJobs = async () => {
      setTimeout(() => {
        const response = fakeData;
        setJobs(response);
        setloading(false);
      }, 2000);
    };

    getJobs();
  }, []);

  useEffect(() => {
    if (jobs) {
      setTotalCount(jobs.length);
    }
  }, [jobs]);

  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      gap={5}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {loading ? (
        <Box>
          <CircularProgress color="inherit" />
        </Box>
      ) : jobs && jobs.length ? (
        visibleData.map((item, index) => <JobCard job={item} key={index} />)
      ) : (
        <TypographyModel>Ainda não há candidaturas 😓 </TypographyModel>
      )}
      {totalCount > 0 && totalCount > itemPerPage && (
        <Pagination
          page={currentPage}
          onChange={handlePageChange}
          count={Math.ceil(totalCount / itemPerPage)}
          color="primary"
        />
      )}
    </Box>
  );
};

export default CheckedJobsList;
