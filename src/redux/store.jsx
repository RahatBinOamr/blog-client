import { configureStore } from '@reduxjs/toolkit';
import relatedReducer from './Related/RelatedReducer';
import { api } from './api';
import buttonReducer from './button/buttonReducer';
import searchReducer from './searchValue/SearchReducer';

export const store = configureStore({
  reducer: {
    searchData: searchReducer,
    buttonData: buttonReducer,
    relatedData: relatedReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
