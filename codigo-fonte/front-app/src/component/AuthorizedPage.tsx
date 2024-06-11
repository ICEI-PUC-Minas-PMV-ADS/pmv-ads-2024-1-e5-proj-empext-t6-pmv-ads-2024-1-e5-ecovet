import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../reducers/store";
import Box from "@mui/material/Box";
import HeaderComponent from "./Header";
import { authorizeUser } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
var ls = require("local-storage");

const AuthorizedPage = ({ children, userRole }: any) => {
  const { isAuthorized, role } = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const userFromStorage = ls.get('user');
    console.log(">>>>>>>>> userFromStorage")
    console.log(userFromStorage)
    // setUser(userFromStorage);
  }, []);



  // useEffect(() => {
  //   if(!isAuthorized ){
  //     navigate('/')
  //   }
  // },[isAuthorized])

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderComponent />

      {children}

      <Footer />
    </Box>
  );
};

export default AuthorizedPage;
