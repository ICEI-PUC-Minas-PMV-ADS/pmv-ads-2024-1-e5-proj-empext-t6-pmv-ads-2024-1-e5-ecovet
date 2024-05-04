import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../reducers/store'
import Box from '@mui/material/Box';
import HeaderComponent from './Header';
import { authorizeUser, getToken } from '../reducers/userReducer'
import Footer from './Footer';

const AuthorizedPage = ({children, userRole}: any) => {
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized)
  const token = useSelector((state: RootState) => state.user.token)
  const dispatch = useDispatch<AppDispatch>()

  // useEffect(() => {
  //   dispatch(authorizeUser({userRole, instance, accounts}))
  // }, [instance]) 

  // useEffect(() => {
  //   console.log(">>>>>> isAuthorized")
  //   // dispatch(getToken({instance, accounts}))
  // },[isAuthorized]) 
  
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight:"100vh"
    }}> 
      <HeaderComponent  />
      {children}
      <Footer />
    </Box> 
  )
}

export default AuthorizedPage