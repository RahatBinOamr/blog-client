import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import searchReducer from './searchValue/SearchReducer';

export const store = configureStore({
  reducer: {
    searchData: searchReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
