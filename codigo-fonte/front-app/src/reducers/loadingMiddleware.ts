import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { setLoading, setIdle } from './loadingReducer';

const loadingMiddleware: Middleware = ({ dispatch }) => next => action => {
  const actionType = (action as PayloadAction<any>)?.type; 
  if (actionType && actionType.endsWith('/pending')) {
    dispatch(setLoading());
  }

  if (actionType && (actionType.endsWith('/fulfilled') || actionType.endsWith('/rejected'))) {
    dispatch(setIdle());
  }

  return next(action);
};

export default loadingMiddleware;