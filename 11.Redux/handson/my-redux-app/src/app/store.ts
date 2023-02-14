import { configureStore } from '@reduxjs/toolkit';
import searchItemReducer from '../features/search-item-slice';

export const store = configureStore({
  reducer: {
    searchItem: searchItemReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
