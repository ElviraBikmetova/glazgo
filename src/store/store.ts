import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReduser from './redusers/authSlice'
import paginationReduser from './redusers/paginationSlice'
import baseApi from '../services/BaseApi';

export const store = configureStore({
  reducer: {
    auth: authReduser,
    pagination: paginationReduser,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
