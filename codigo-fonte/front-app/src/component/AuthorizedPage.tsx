import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../reducers/store'
import Box from '@mui/material/Box';
import HeaderComponent from './Header';
import { authorizeUser } from '../reducers/userReducer'
import { useNavigate } from "react-router-dom";
var ls = require('local-storage');

const AuthorizedPage = ({children, userRole}: any) => {
  const {isAuthorized, role} = useSelector((state: RootState) => state.user)
  const token = useSelector((state: RootState) => state.user.token)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();


  // useEffect(() => {
  //   if(!isAuthorized ){
  //     navigate('/')
  //   }
  // },[isAuthorized]) 
  return (
    <Box
    style={{ 
      height: '100vh',
    }}>
      <HeaderComponent  />
      {children}
    </Box> 
  )
}

export default AuthorizedPage