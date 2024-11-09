import { configureStore } from '@reduxjs/toolkit';
import spreadsheetReducer from './features/spreadsheet/spreadsheetSlice';
import variableListReducer from './features/spreadsheet/variableListSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      spreadsheet: spreadsheetReducer,
      variableList: variableListReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
