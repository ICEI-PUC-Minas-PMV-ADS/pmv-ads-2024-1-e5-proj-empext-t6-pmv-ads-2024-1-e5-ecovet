import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
  } from "@mui/material";
  import React from "react";
  
  type ListBoxProps = {
    sort: string;
    setSort: React.Dispatch<string>;
  };
  
  const ListBox = ({ sort, setSort }: ListBoxProps) => {
    const handleChange = (event: SelectChangeEvent) => {
      setSort(event.target.value as string);
    };
    console.log(sort);
    return (
      <FormControl sx={{
        width: {xs: "128px", md: "160px"},
  
      }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          onChange={handleChange}
          size="small"
          sx={{
       
            fontFamily: "red-hat-display",
            fontSize: "14px", 
            borderRadius: "8px",
         
          }}
        >
          <MenuItem value={"Novo"}>Novo</MenuItem>
          <MenuItem value={"Antigos"}>Antigos</MenuItem>
          <MenuItem value={"A-Z"}>A-Z</MenuItem>
          <MenuItem value={"Z-A"}>Z-A</MenuItem>
        </Select>
      </FormControl>
    );
  };
  
  export default ListBox;