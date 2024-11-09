import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/store';

interface VariableListState {
  comparison: number[];
  measurement: number[];
}

const initialState: VariableListState = {
  comparison: [],
  measurement: [],
};

export const variableListSlice = createSlice({
  name: 'variableList',
  initialState,
  reducers: {
    toggleComparison: (state, action: PayloadAction<number>) => {
      state.comparison = state.comparison.includes(action.payload)
        ? state.comparison.filter((v) => v !== action.payload)
        : [...state.comparison, action.payload];
    },
    toggleMeasurement: (state, action: PayloadAction<number>) => {
      state.measurement = state.measurement.includes(action.payload)
        ? state.measurement.filter((v) => v !== action.payload)
        : [...state.measurement, action.payload];
    },
  },
});

export const { toggleComparison, toggleMeasurement } =
  variableListSlice.actions;

export const selectComparison = (state: RootState) =>
  state.variableList.comparison;
export const selectMeasurement = (state: RootState) =>
  state.variableList.measurement;

export default variableListSlice.reducer;
