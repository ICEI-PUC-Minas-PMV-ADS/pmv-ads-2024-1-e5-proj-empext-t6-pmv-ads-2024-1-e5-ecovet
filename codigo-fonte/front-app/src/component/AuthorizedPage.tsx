import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../reducers/store'
import Box from '@mui/material/Box';
import HeaderComponent from './Header';
import { authorizeUser, getUserFromStorage } from '../reducers/userReducer'
import { useNavigate } from "react-router-dom";

const AuthorizedPage = ({children, userRole}: any) => {
  const {isAuthorized, role} = useSelector((state: RootState) => state.user)
  const token = useSelector((state: RootState) => state.user.token)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserFromStorage())
  }, []) 


  useEffect(() => {
    if(!isAuthorized ){
      navigate('/login')
    }else{
      role == 'Clínica' ? navigate('/clinica') : navigate('/')
    }
  },[isAuthorized]) 

  // useEffect(() => {
  //   console.log(">>>>>> isAuthorized")
  //   console.log(isAuthorized)
  //   // dispatch(getToken({instance, accounts}))
  // },[isAuthorized]) 
  
  return (
    <Box
    style={{ 
      backgroundImage: `url("img/bg.jpg")`,
      backgroundColor: 'red !important',
      height: '100vh',
    }}>
      <HeaderComponent  />
      {children}
    </Box> 
  )
}

export default AuthorizedPage